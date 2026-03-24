export interface GHLContactPayload {
  locationId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  customFields?: Array<{ id: string; key: string; field_value: string }>;
}

export class GHLDatasource {
  private readonly baseUrl = "https://services.leadconnectorhq.com/contacts/";
  
  constructor(private readonly apiKey: string) {}

  async postContact(payload: GHLContactPayload): Promise<void> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
        "Version": "2021-07-28",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("GHL Error Details:", errorText); 
      throw new Error(`GHL API Error: ${response.status} - ${errorText}`);
    }
  }
}