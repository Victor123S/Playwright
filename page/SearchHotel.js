export class SearchHotel{
    constructor(page){
        this.page = page
        this.location = page.locator('//select[@id="location"]')
        this.hotel = page.locator('//select[@id="hotels"]')
        this.search =page.locator('//input[@id="Submit"]')
    }
    async enterLocation(){
        await this.location.selectOption ({ value:"Brisbane" })

    }
    async chooseHotel(){
        await this.hotel.selectOption({value:"Hotel Creek"})
    }
   async searchClick(){
    await this.search.click()
    await this.page.waitForTimeout(3000)

   } 
     
}