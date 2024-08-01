# tango-qa-challenge
# Project Setup Instructions

To set up and run this project, follow these steps:

## 1. Clone the Repository
```bash
git clone https://github.com/mrgrach/tango-qa-challenge.git
```

## 2. Install Dependencies
```bash
npm install
```
## 3. Open Cypress test runner
Navigate into the cloned repository and

```bash
npx cypress open
```
## TODO for a signup e2e
<img width="1321" alt="Screenshot 2024-07-31 at 17 00 50" src="https://github.com/user-attachments/assets/d1a98c4a-1818-46e7-ab83-2b0333140af0">

- Create a new POM for the signup page
- Install a gmail library to get a verification code from email
- Add a test case to verify the reset password scenario 
- Add test cases to assert error messages when user types invalid inputs
- Add test cases to verify Tango's privacy policy and terms of service links
- Replace explicit waits 

## TODO for a login e2e
<img width="1262" alt="Screenshot 2024-07-31 at 16 59 46" src="https://github.com/user-attachments/assets/7d6b900c-0c26-42b4-b3e0-875f841281b5">

- Create a new POM for the left nav bar
- Add an e2e test for profile settings
- Add an e2e test for inviting members
- Add an e2e test for Billing
- Add an e2e test for creating a new Tango


