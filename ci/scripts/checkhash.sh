#!/usr/bin/env bash

sudo apt-get install -y jq

function checkHash {
    # $1 is the project
    HASH_VALUE=`find dashboard -type f ! -path "*node_modules*" -print0 | sort -z | xargs -0 sha256sum | sha256sum | head -c 64`
    RESPONSE=`curl -H "Content-Type: application/json" -d "{\"structuredQuery\": {\"from\": {\"collectionId\": \"builds\"},\"where\": {\"compositeFilter\": {\"op\": \"AND\",\"filters\": [{\"fieldFilter\": {\"field\": {\"fieldPath\": \"project\"},\"op\": \"EQUAL\",\"value\": {\"stringValue\": '$1'}}},{\"fieldFilter\": {\"field\": {\"fieldPath\": \"hash\"},\"op\": \"EQUAL\",\"value\": {\"stringValue\": '$HASH_VALUE'}}}]}}}}" -X POST "https://firestore.googleapis.com/v1/projects/fyipe-devops/databases/(default)/documents:runQuery"`
    echo "hash value is '$HASH_VALUE'"
    echo "response is '$RESPONSE'"
    # if response contains an array with document key, then the hash already exist in db
    # if response does not contain an array with document key, then the hash does not exist in db, create the document
    document=`jq '.[0].document' <<< "$RESPONSE"`
    if [[ $document = null ]]
    then
        echo false
    else
        echo true
    fi
}

checkHash $1