#!/bin/bash

if [ -z "$1" ]; then
  echo -e " \nplease include a version.\n"
  exit
fi

echo -e "\ndeploying updates...\n"

npm version $1 & version_id=$!
wait $version_id
if [ $? -eq 1 ]; then exit; fi

npm run build & build_id=$!
wait $build_id
if [ $? -eq 1 ]; then exit; fi

npm publish --access public & publish_id=$!
wait $publish_id
if [ $? -eq 1 ]; then exit; fi

echo -e "\n git push tags \n"
git push --tags & push_id=$!
wait $push_id
if [ $? -eq 1 ]; then exit; fi

echo -e "\n git push \n"
git push & push_id=$!
wait $push_id
if [ $? -eq 1 ]; then exit; fi

echo -e "\ndeploy finished.\n"