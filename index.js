const { Builder, By, Key, util } = require("selenium-webdriver");

var assert = require("assert");

async function googling() {
  //buka browser
  let driver = await new Builder().forBrowser("firefox").build();
  // buka url google
  await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
    await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms")
    await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms")
    await driver.findElement(By.id("btnLogin")).click()
  //   await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);

  const element = await driver.findElement(By.xpath("//li")).getText();

  try{
    assert.strictEqual(await element, 'Welcome Admin');
    console.log("Berhasil")
  }catch (e){
    console.log(e);
  }
}

googling();