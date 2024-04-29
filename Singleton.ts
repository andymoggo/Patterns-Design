// DatabaseManager.ts

class DatabaseManager {
    private static instance: DatabaseManager;
    private connection: any;  

    private constructor() {
        // Initialize connection. Assume a generic placeholder for connection setup.
        this.connection = this.connectToDatabase();
    }

    public static getInstance(): DatabaseManager {
        if (!this.instance) {
            this.instance = new DatabaseManager();
            Object.freeze(this.instance);
        }
        return this.instance;
    }

    private connectToDatabase(): any {
        // Placeholder for database connection logic.
        console.log("Database connected");
        return {};  
    }

    public executeQuery(query: string): void {
        // Placeholder for executing a query against the database
        console.log(`Executing query: ${query}`);
        //`this.connection.query(query)`.
    }

    public closeConnection(): void {
        console.log("Closing database connection");
        // Close the connection to the database if needed.
    }
}

// Prevent modification to properties and values of the object in export
const dbManager = DatabaseManager.getInstance();
Object.freeze(dbManager);

export { dbManager as DatabaseManager };

// Usage:
//
// import { DatabaseManager } from './DatabaseManager';
// DatabaseManager.executeQuery("SELECT * FROM users");
// DatabaseManager.closeConnection();  // Optionally if you need it
