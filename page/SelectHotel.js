export class SelectHotel{
    constructor(page){
        this.page=page
        this.bttn = page.locator('//input[@id="radiobutton_1"]')
    }
    async slctHotel(){
        await this.bttn.click()
    }
}