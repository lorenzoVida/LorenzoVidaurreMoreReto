exports.EmployePage = 
class EmployePage{
    constructor(page){
        this.page = page;
        this.pimEmploye ="//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']"
        this.btnAddEmployee ="//button[normalize-space()='Add']"
    }

    async enterPIMMoodule(){
        await this.page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click();
        await this.page.locator("//button[normalize-space()='Add']").click();
    }

    async completeInformationNewEmploye(){
        await this.page.getByPlaceholder("First Name").fill("Lorenzo");
        await this.page.getByPlaceholder("Last Name").fill("Vidaurre");
        await this.page.locator(".oxd-switch-input.oxd-switch-input--active.--label-right").click();
        await this.page.locator("div:nth-of-type(3) > .orangehrm-full-width-grid.oxd-grid-2 > div:nth-of-type(1) > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input").fill("LorenzoVidaureMore2024@");
        await this.page.locator(".oxd-grid-item.oxd-grid-item--gutters.user-password-cell > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input").fill("LorenzoVidaurreMore2024@");
        await this.page.locator("div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").fill("LorenzoVidaurreMore2024@");
        await this. page.locator("button[type='submit']").click();
       

     }
}