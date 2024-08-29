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
}