echo "running packages...\n"

npm install @playbooks/utils@latest

npm install @playbooks/configs@latest --save-dev

npm install @playbooks/ui@latest

npx yalc remove --all