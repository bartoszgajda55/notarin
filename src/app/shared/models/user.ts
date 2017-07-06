export class User {
  private displayName: string;
  private email: string;
  private photoURL: string;
  private providerId: string;
  private uid: string;

  constructor(data: any[]) {
    Object.assign(this, data);
  }

  public getDisplayName(): string {
    return this.displayName;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPhotoURL(): string {
    return this.photoURL;
  }

  public getProviderId(): string {
    return this.providerId;
  }

  public getUid(): string {
    return this.uid;
  }
}
