#!/bin/bash

# GoDaddy DNS Management Script for ultimate-motors.ca
# Usage: ./manage-dns.sh [list|set|delete]

DOMAIN="ultimate-motors.ca"
GODADDY_API_KEY="gHAEJSADjmwW_ECSzrrSP9ogHejh8Xre24t"  # Add your API key here
GODADDY_API_SECRET="FAtT1B31Wjcq8nQ4qUA6fk"  # Add your API secret here

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if API credentials are set
check_credentials() {
    if [[ -z "$GODADDY_API_KEY" || -z "$GODADDY_API_SECRET" ]]; then
        echo -e "${RED}❌ Error: Please set your GoDaddy API credentials in this script${NC}"
        echo -e "${YELLOW}Get them from: https://developer.godaddy.com/keys${NC}"
        exit 1
    fi
}

# List current DNS records
list_records() {
    echo -e "${BLUE}📋 Current DNS records for $DOMAIN:${NC}"
    echo -e "${YELLOW}Trying production API...${NC}"
    RESPONSE=$(curl -s -X GET "https://api.godaddy.com/v1/domains/$DOMAIN/records" \
        -H "Authorization: sso-key $GODADDY_API_KEY:$GODADDY_API_SECRET" \
        -H "Content-Type: application/json")
    
    if echo "$RESPONSE" | grep -q "ACCESS_DENIED\|UNABLE_TO_AUTHENTICATE"; then
        echo -e "${YELLOW}Production failed, trying OTE (test) environment...${NC}"
        RESPONSE=$(curl -s -X GET "https://api.ote-godaddy.com/v1/domains/$DOMAIN/records" \
            -H "Authorization: sso-key $GODADDY_API_KEY:$GODADDY_API_SECRET" \
            -H "Content-Type: application/json")
    fi
    
    echo "$RESPONSE" | jq '.'
}

# Set DNS records for Netlify
set_netlify_records() {
    echo -e "${YELLOW}🔧 Setting DNS records for Netlify...${NC}"
    
    # Delete existing records first
    echo -e "${YELLOW}Deleting existing A and CNAME records...${NC}"
    curl -s -X DELETE "https://api.godaddy.com/v1/domains/$DOMAIN/records/A/@" \
        -H "Authorization: sso-key $GODADDY_API_KEY:$GODADDY_API_SECRET"
    
    curl -s -X DELETE "https://api.godaddy.com/v1/domains/$DOMAIN/records/CNAME/www" \
        -H "Authorization: sso-key $GODADDY_API_KEY:$GODADDY_API_SECRET"
    
    # Set new records
    echo -e "${YELLOW}Setting A record for @ -> 75.2.60.5${NC}"
    curl -s -X PUT "https://api.godaddy.com/v1/domains/$DOMAIN/records/A/@" \
        -H "Authorization: sso-key $GODADDY_API_KEY:$GODADDY_API_SECRET" \
        -H "Content-Type: application/json" \
        -d '[{"data":"75.2.60.5","ttl":600}]'
    
    echo -e "${YELLOW}Setting CNAME record for www -> ultimate-motor.netlify.app${NC}"
    curl -s -X PUT "https://api.godaddy.com/v1/domains/$DOMAIN/records/CNAME/www" \
        -H "Authorization: sso-key $GODADDY_API_KEY:$GODADDY_API_SECRET" \
        -H "Content-Type: application/json" \
        -d '[{"data":"ultimate-motor.netlify.app","ttl":600}]'
    
    echo -e "${GREEN}✅ DNS records updated successfully!${NC}"
    echo -e "${BLUE}🕐 Changes may take 5-30 minutes to propagate${NC}"
}

# Delete specific record
delete_record() {
    local type=$1
    local name=$2
    echo -e "${RED}🗑️  Deleting $type record for $name...${NC}"
    curl -s -X DELETE "https://api.godaddy.com/v1/domains/$DOMAIN/records/$type/$name" \
        -H "Authorization: sso-key $GODADDY_API_KEY:$GODADDY_API_SECRET"
    echo -e "${GREEN}✅ Record deleted${NC}"
}

# Main function
main() {
    check_credentials
    
    case "$1" in
        "list")
            list_records
            ;;
        "set")
            set_netlify_records
            ;;
        "delete")
            if [[ -z "$2" || -z "$3" ]]; then
                echo -e "${RED}Usage: $0 delete [TYPE] [NAME]${NC}"
                echo -e "${YELLOW}Example: $0 delete CNAME www${NC}"
                exit 1
            fi
            delete_record "$2" "$3"
            ;;
        *)
            echo -e "${BLUE}🚀 GoDaddy DNS Management for $DOMAIN${NC}"
            echo -e "${YELLOW}Usage:${NC}"
            echo -e "  $0 list              - List all DNS records"
            echo -e "  $0 set               - Set DNS records for Netlify"
            echo -e "  $0 delete TYPE NAME  - Delete specific record"
            echo ""
            echo -e "${YELLOW}Examples:${NC}"
            echo -e "  $0 list"
            echo -e "  $0 set"
            echo -e "  $0 delete CNAME www"
            echo -e "  $0 delete A @"
            ;;
    esac
}

main "$@"
