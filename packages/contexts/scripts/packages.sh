echo "running packages...\n"

npm install @ehubbell/molecules@latest
npm install @ehubbell/utils@latest

npm install @ehubbell/configs@latest --save-dev

npx yalc remove --all