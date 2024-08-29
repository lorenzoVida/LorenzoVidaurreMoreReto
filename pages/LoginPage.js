exports.LoginPage =
class LoginPage{
    constructor(page){
        this.page = page;
        this.user ="input[placeholder='Username']"
        this.password ="input[placeholder='Password']"
        this.ingresar = "button[type='submit']"
    }

    async gotToLoginPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async login(username,pass){
        await this.page.locator(this.user).fill(username)
        await this.page.locator(this.password).fill(pass)
        await this.page.locator(this.ingresar).click()
    }
    
}
