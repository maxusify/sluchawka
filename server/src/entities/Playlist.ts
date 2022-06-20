import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Playlist {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}
