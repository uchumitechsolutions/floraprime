import { type User, type InsertUser, type Property, type InsertProperty, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Property methods
  getProperties(): Promise<Property[]>;
  getFeaturedProperties(): Promise<Property[]>;
  getProperty(id: string): Promise<Property | undefined>;
  createProperty(property: InsertProperty): Promise<Property>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private properties: Map<string, Property>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.users = new Map();
    this.properties = new Map();
    this.contacts = new Map();
    
    // Initialize with sample properties
    this.initializeProperties();
  }

  private async initializeProperties() {
    const sampleProperties: InsertProperty[] = [
      {
        title: "Karen Residential Plot",
        description: "Prime residential plot in the prestigious Karen area with excellent infrastructure and proximity to major amenities.",
        location: "Karen, Nairobi",
        price: "8500000",
        size: "0.5 acres (21,780 sq ft)",
        type: "plot",
        imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        featured: true,
      },
      {
        title: "Modern Family Home",
        description: "Stunning modern family home with contemporary architecture and premium finishes throughout.",
        location: "Kiambu Road",
        price: "15500000",
        size: "4 Bedrooms, 3 Bathrooms",
        type: "house",
        bedrooms: 4,
        bathrooms: 3,
        imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        featured: true,
      },
      {
        title: "Investment Land",
        description: "Excellent investment opportunity with great potential for future development in growing Machakos area.",
        location: "Machakos County",
        price: "2500000",
        size: "5 acres (217,800 sq ft)",
        type: "plot",
        imageUrl: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        featured: true,
      },
      {
        title: "Luxury Villa",
        description: "Exceptional luxury villa in the exclusive Runda Estate with world-class amenities and finishes.",
        location: "Runda Estate",
        price: "35000000",
        size: "5 Bedrooms, 4 Bathrooms",
        type: "house",
        bedrooms: 5,
        bathrooms: 4,
        imageUrl: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        featured: true,
      },
      {
        title: "Commercial Plot",
        description: "Prime commercial plot in the heart of Westlands with excellent visibility and accessibility.",
        location: "Westlands, Nairobi",
        price: "25000000",
        size: "0.25 acres (10,890 sq ft)",
        type: "commercial",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        featured: true,
      },
      {
        title: "Starter Home",
        description: "Perfect starter home for young families with modern amenities in a peaceful neighborhood.",
        location: "Ongata Rongai",
        price: "4200000",
        size: "3 Bedrooms, 2 Bathrooms",
        type: "house",
        bedrooms: 3,
        bathrooms: 2,
        imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        featured: true,
      },
    ];

    for (const property of sampleProperties) {
      await this.createProperty(property);
    }
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Property methods
  async getProperties(): Promise<Property[]> {
    return Array.from(this.properties.values());
  }

  async getFeaturedProperties(): Promise<Property[]> {
    return Array.from(this.properties.values()).filter(property => property.featured);
  }

  async getProperty(id: string): Promise<Property | undefined> {
    return this.properties.get(id);
  }

  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const id = randomUUID();
    const property: Property = { ...insertProperty, id };
    this.properties.set(id, property);
    return property;
  }

  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { ...insertContact, id };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
