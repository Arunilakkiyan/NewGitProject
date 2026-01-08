
exports.LoginPage =class LoginPage{

    

    constructor(page){
        this.page=page;
        this.usernameInpur='#email';
        this.passwordInput='#pass';
        this.loginBtn="//button[@name='login']";

    }

   

    async login(username,password){

        await this.page.locator(this.usernameInpur).fill(username);
         await this.page.locator(this.passwordInput).fill(password);
          await this.page.locator(this.loginBtn).click();
    }
}
