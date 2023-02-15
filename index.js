(async () => {
  const db = require("./db");
  console.log("Comecou");
  console.log("select * from employee");
  const employee = await db.selectEmployee();
  console.log(employee);
})();
