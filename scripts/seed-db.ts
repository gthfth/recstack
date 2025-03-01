import { db } from "../lib/db"

async function seed() {
  try {
    // Create tables
    await db`
      CREATE TABLE IF NOT EXISTS clients (
        id SERIAL PRIMARY KEY,
        name TEXT,
        company TEXT,
        email TEXT,
        phone TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS deals (
        id SERIAL PRIMARY KEY,
        client_id INTEGER REFERENCES clients(id),
        title TEXT,
        value DECIMAL,
        stage TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS activities (
        id SERIAL PRIMARY KEY,
        client_id INTEGER REFERENCES clients(id),
        deal_id INTEGER REFERENCES deals(id),
        type TEXT,
        description TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Insert sample clients
    await db`
      INSERT INTO clients (name, company, email, phone)
      VALUES 
        ('John Doe', 'Acme Corp', 'john@acme.com', '555-0100'),
        ('Jane Smith', 'Tech Inc', 'jane@tech.com', '555-0101'),
        ('Bob Wilson', 'Star Ltd', 'bob@star.com', '555-0102')
    `;

    // Insert sample deals
    await db`
      INSERT INTO deals (client_id, title, value, stage)
      VALUES 
        (1, 'Enterprise Package', 50000, 'Proposal'),
        (2, 'Custom Solution', 75000, 'Negotiation'),
        (3, 'Annual Contract', 100000, 'Closed')
    `;

    // Insert sample activities
    await db`
      INSERT INTO activities (client_id, deal_id, type, description)
      VALUES 
        (1, 1, 'Call', 'Initial discussion about requirements'),
        (2, 2, 'Meeting', 'Proposal presentation'),
        (3, 3, 'Email', 'Contract signed and received')
    `;

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

seed().catch(console.error);

