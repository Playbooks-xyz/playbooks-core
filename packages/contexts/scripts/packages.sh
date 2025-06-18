echo "running packages...\n"

npm install @playbooks/molecules@latest
npm install @playbooks/utils@latest

npm install @playbooks/configs@latest --save-dev

npx yalc remove --all