import { atom } from "jotai";
import type { Project } from "./use-project";


export const selecedProject = atom<Project | null>(null)