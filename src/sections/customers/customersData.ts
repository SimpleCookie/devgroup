import {
  imgElinorr,
  imgGodesity,
  imgHairtastic,
  imgLantmateriet,
  imgLeeroy,
  imgSmidesrum,
} from "../../imgs"
import { LogoCardProps } from "./LogoGrid"

export const customersData: LogoCardProps[] = [
  { image: imgLantmateriet, name: "Lantmateriet", objectFit: "contain" },
  { image: imgElinorr, name: "Elinorr", objectFit: "cover" },
  { image: imgGodesity, name: "Godesity", objectFit: "cover" },
  { image: imgHairtastic, name: "Hairtastic", objectFit: "cover" },
  { image: imgLeeroy, name: "Leeroy", objectFit: "contain", padding: true },
  { image: imgSmidesrum, name: "Smidesrum", objectFit: "contain", padding: true },
]
