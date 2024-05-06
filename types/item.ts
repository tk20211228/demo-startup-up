import { Tables } from "./database";

export type item = Tables<"items">;

export type PickItem = Pick<item, "id" | "name">;
export type OmitItem = Omit<item, "id" | "name">;
