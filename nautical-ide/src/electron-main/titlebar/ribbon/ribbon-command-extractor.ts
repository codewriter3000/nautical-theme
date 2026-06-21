import ribbonConfigJson from './ribbon-config.json';

// Define a type that includes the command property for the JSON structure
interface RibbonButtonWithCommand {
  id: string;
  label: string;
  caption?: string;
  icon?: string;
  position?: string;
  command?: string;
}

interface RibbonChunkWithCommand {
  id: string;
  label: string;
  buttons: RibbonButtonWithCommand[];
}

interface RibbonTabWithCommand {
  id: string;
  label: string;
  chunks: RibbonChunkWithCommand[];
}

/**
 * Extracts all command properties from the ribbon configuration using functional programming features
 * @returns An array of all command strings found in the ribbon configuration
 */
export function getAllCommands(): string[] {
  // Cast the JSON to include command property
  const ribbonConfig = ribbonConfigJson as RibbonTabWithCommand[];

  // Use flatMap to extract all commands from nested structures
  return ribbonConfig.flatMap(tab =>
    tab.chunks.flatMap(chunk =>
      chunk.buttons
        .filter(button => button.command !== undefined) // Filter out buttons without commands
        .map(button => button.command!) // Extract the command string
    )
  );
}

/**
 * Alternative implementation using reduce for functional programming
 * @returns An array of all command strings found in the ribbon configuration
 */
export function getAllCommandsReduce(): string[] {
  const ribbonConfig = ribbonConfigJson as RibbonTabWithCommand[];

  return ribbonConfig.reduce<string[]>((acc, tab) => {
    const tabCommands = tab.chunks.reduce<string[]>((chunkAcc, chunk) => {
      const chunkCommands = chunk.buttons
        .filter(button => button.command !== undefined)
        .map(button => button.command!);
      return [...chunkAcc, ...chunkCommands];
    }, []);
    return [...acc, ...tabCommands];
  }, []);
}

/**
 * Extracts unique commands only (removes duplicates)
 * @returns An array of unique command strings found in the ribbon configuration
 */
export function getUniqueCommands(): string[] {
  const allCommands = getAllCommands();
  return [...new Set(allCommands)];
}

// Example usage:
// const allCommands = getAllCommands();
// const uniqueCommands = getUniqueCommands();
// console.log('All commands:', allCommands);
// console.log('Unique commands:', uniqueCommands);