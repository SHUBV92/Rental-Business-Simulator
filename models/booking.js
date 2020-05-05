const dbConnection = require("../dbConnection")

class Booking {
    constructor(id, name, email, car, booking) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.car = car;
        this.booking = booking
    }

    static async find(id) {
        let db = new dbConnection();
        await db.start();
        let result = await db.query(`SELECT * FROM bookings WHERE id=${id}`);
        await db.close();
        return result.rows; 
    }

    static async create(name, email, car, booking,) {
        let db = new dbConnection()
        let curDate = new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");
        await db.start();

        let result = await db.query(
            `INSERT INTO bookings
            (name, email, car, booking)
            VALUES (`${name}`, `${email}`, `${car}`, `${booking}`)
            RETURNING *;
          `
        );
        await db.close();
        result = result.rows[0];
        return new Booking(
            result.name,
            result.email,
            result.car,
            result.booking, 
        )

        await db.close();
        return 
    }





module.export = Booking; 