const client = require("mssql");

function deleteHelper(req, res, params, table_name) {
    let body = [];
    req
        .on("data", (chunk) => {
            body.push(chunk);
            console.log("Parsing Request Body");
        })
        .on("end", () => {
            body = JSON.parse(Buffer.concat(body).toString());
            console.log("Request Body Parsed");
            console.log(body);
            client.query(`delete from ${table_name} where customer_id=${body.id}`, (err, _) => {
                if (err) {
                    console.log("Error occured");
                    console.log(err);
                    res.statusCode = 400;
                    res.end(
                        JSON.stringify({
                            message: "Something went wrong",
                        }),
                    );
                    return;
                }
                console.log("Data Successfully Deleted");
                res.statusCode = 204;
                res.end();
            })
        })
}

module.exports = { deleteHelper }