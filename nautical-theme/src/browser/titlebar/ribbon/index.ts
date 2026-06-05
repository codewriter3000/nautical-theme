export interface RibbonButton {
  id: string;
  label: string;
  caption?: string;   // small text under the group, like "New", "Open", "Save:"
  icon?: string;    // e.g. 'new-file', 'folder-open', etc. (later)
  position?: string;
  // commandId?: string;
}

export interface RibbonChunk {
  id: string;
  label: string;           // group label under the buttons ("New", "Open", "Save:")
  buttons: RibbonButton[];
}

export interface RibbonTab {
  id: string;              // 'file', 'edit', ...
  label: string;           // 'File', 'Edit', ...
  chunks: RibbonChunk[];
}

export type RibbonConfig = RibbonTab[];

export { default as Ribbon } from './ribbon';