#!/bin/bash
if [ -z "$1" ]; then
  echo -e " \n please include a version. \n"
  exit
fi

echo -e "\n deploying updates... \n"

echo -e "\n npm version \n"
npm version $1

echo -e "\n npm build \n"
npm run build & build_id=$!
wait $build_id
if [ $? -eq 1 ]; then exit; fi

echo -e "\n npm build:dts \n"
npm run build:dts & dts_id=$!
wait $dts_id
if [ $? -eq 1 ]; then exit; fi

echo -e "\n npm publish \n"
npm publish --access public
if [ $? -ne 0 ]; then echo "Publish failed"; exit 1; fi

echo -e "\n deploy finished. \n"