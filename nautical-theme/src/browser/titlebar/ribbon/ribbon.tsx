import * as React from 'react';
import ribbonConfigJson from './ribbon-config.json';
import type { RibbonConfig, RibbonTab, RibbonChunk, RibbonButton } from './index';
import type { CommandService } from '@theia/core/lib/common';
import { DebugStepInto, DebugStepOut, DebugStepOver } from '../icons/index';

import {
  Add, Catalog, ChevronDown, Close, CloseOutline, ColorPalette, Document,
  DocumentAdd, FolderAdd, FolderDetails, FolderOff, FolderOpen,
  Keyboard, Launch, RecentlyViewed, Renew, Save, Settings,
  SettingsAdjust, UpdateNow, Workspace,
  
  Undo, Redo, Cut, CopyToClipboard, Paste, Search,

  CodeBlock,

  SquareSlash, ExecutionHistory, IbmWatsonxAssistant,
  AiLabel, ParentChild, Debug, Terminal_3270, SearchLocate,
  Extensions, TransformBinary, BpmnConditionalOutline, Plug,
  PortOutput, WarningAlt, Thumbnail_2, CodeReference,
  SourceControl, Tools, TextWrap, Roadmap, DotMark,
  AreaRangeDashed, WatsonHealthAutoScroll,

  ArrowLeft, ArrowRight, Rotate, FolderDetailsReference,
  Beta, DataDictionary, WatsonHealthDicomOverlay, Development,
  ListNumbered, Object as ObjectIcon,

  Play, Stop, Restart, TableSplit, TableAdd, Continue, Pause,

  Terminal, IbmWatsonDiscovery, Split, TrashCan, Clean, Task, Rocket,
  UserProfile,

  Help, UserMultiple, LogoGithub, BeeBat, License, Information,
} from '@carbon/icons-react';

const ribbonConfig = ribbonConfigJson as RibbonConfig;

const iconMap: Record<string, React.ElementType> = {
  Add,
  Catalog,
  Close,
  CloseOutline,
  ColorPalette,
  Document,
  DocumentAdd,
  FolderAdd,
  FolderDetails,
  FolderOff,
  FolderOpen,
  Keyboard,
  Launch,
  RecentlyViewed,
  Renew,
  Save,
  Settings,
  SettingsAdjust,
  UpdateNow,
  Workspace,

  Undo, 
  Redo, 
  Cut, 
  CopyToClipboard, 
  Paste, 
  Search,

  CodeBlock,

  SquareSlash,
  ExecutionHistory,
  IbmWatsonxAssistant,
  AiLabel,
  ParentChild,
  Debug,
  Terminal_3270,
  SearchLocate,
  Extensions,
  TransformBinary,
  BpmnConditionalOutline,
  Plug,
  PortOutput,
  WarningAlt,
  Thumbnail_2,
  CodeReference,
  SourceControl,
  Tools,
  TextWrap,
  Roadmap,
  DotMark,
  AreaRangeDashed,
  WatsonHealthAutoScroll,

  ArrowLeft,
  ArrowRight,
  Rotate,
  FolderDetailsReference,
  Beta,
  DataDictionary,
  WatsonHealthDicomOverlay,
  Development,
  ListNumbered,
  ObjectIcon,

  Play,
  Stop,
  Restart,
  TableSplit,
  TableAdd,
  Continue,
  Pause,
  DebugStepInto,
  DebugStepOut,
  DebugStepOver,

  Terminal,
  IbmWatsonDiscovery,
  Split,
  TrashCan,
  Clean,
  Task,
  Rocket,
  UserProfile,

  Help, 
  UserMultiple,
  LogoGithub,
  BeeBat,
  License,
  Information,
};

interface RibbonProps {
  commandService: CommandService;
}

type CommandHandler = () => void;

export function createRibbonCommandMap(
  commandService: CommandService
): Record<string, CommandHandler> {
  return {
    // --- New ---
    'file.newTextFile': () => {
      commandService.executeCommand('workbench.action.files.newUntitledFile');
    },
    'file.newFile': () => {
      commandService.executeCommand('workbench.action.files.newFile');
    },
    'file.newFolder': () => {
      commandService.executeCommand('explorer.newFolder');
    },
    'file.newWindow': () => {
      commandService.executeCommand('workbench.action.newWindow');
    },

    // --- Open ---
    'file.openFolder': () => {
      commandService.executeCommand('workbench.action.files.openFolder');
    },
    'file.openFile': () => {
      commandService.executeCommand('workbench.action.files.openFile');
    },
    'file.openWorkspaceFromFile': () => {
      commandService.executeCommand('workbench.action.openWorkspace');
    },
    'file.openRecentWorkspace': () => {
      commandService.executeCommand('workbench.action.openRecent');
    },

    // --- Workspace ---
    'file.addFolderToWorkspace': () => {
      commandService.executeCommand('workbench.action.addRootFolder');
    },
    'file.saveWorkspaceAs': () => {
      commandService.executeCommand('workbench.action.saveWorkspaceAs');
    },

    // --- Save ---
    'file.save': () => {
      commandService.executeCommand('workbench.action.files.save');
    },
    'file.saveAll': () => {
      commandService.executeCommand('workbench.action.files.saveAll');
    },
    'file.saveAs': () => {
      commandService.executeCommand('workbench.action.files.saveAs');
    },
    'file.autoSave': () => {
      commandService.executeCommand('workbench.action.toggleAutoSave');
    },

    // --- Preferences ---
    'file.preferences': () => {
      commandService.executeCommand('workbench.action.openSettings');
    },
    'file.settings': () => {
      commandService.executeCommand('workbench.action.openWorkspaceSettings');
    },
    'file.keyboardShortcuts': () => {
      commandService.executeCommand('workbench.action.openGlobalKeybindings');
    },
    'file.colorTheme': () => {
      commandService.executeCommand('workbench.action.selectTheme');
    },
    'file.checkForUpdates': () => {
      commandService.executeCommand('update.checkForUpdates');
    },
    'file.fileIconTheme': () => {
      commandService.executeCommand('workbench.action.selectIconTheme');
    },

    // --- Close ---
    'file.closeWindow': () => {
      commandService.executeCommand('workbench.action.closeWindow');
    },
    'file.closeEditor': () => {
      commandService.executeCommand('workbench.action.closeActiveEditor');
    },
    'file.closeWorkspace': () => {
      commandService.executeCommand('workbench.action.closeFolder');
    },

    // --- Edit: Mistakes ---
    'mistakes.undo': () => {
      commandService.executeCommand('undo');
    },
    'mistakes.redo': () => {
      commandService.executeCommand('redo');
    },

    // --- Edit: Clipboard ---
    'clipboard.cut': () => {
      commandService.executeCommand('editor.action.clipboardCutAction');
    },
    'clipboard.copy': () => {
      commandService.executeCommand('editor.action.clipboardCopyAction');
    },
    'clipboard.copyPath': () => {
      commandService.executeCommand('workbench.action.files.copyPathOfActiveFile');
    },
    'clipboard.paste': () => {
      commandService.executeCommand('editor.action.clipboardPasteAction');
    },

    // --- Edit: Search ---
    'search.find': () => {
      commandService.executeCommand('actions.find');
    },
    'search.replace': () => {
      commandService.executeCommand('editor.action.startFindReplaceAction');
    },
    'search.findInFiles': () => {
      commandService.executeCommand('workbench.action.findInFiles');
    },
    'search.replaceInFiles': () => {
      commandService.executeCommand('workbench.action.replaceInFiles');
    },

    // --- Selection ---
    'selection.selectAll': () => {
      commandService.executeCommand('editor.action.selectAll');
    },
    'selection.expandSelection': () => {
      commandService.executeCommand('editor.action.smartSelect.expand');
    },
    'selection.shrinkSelection': () => {
      commandService.executeCommand('editor.action.smartSelect.shrink');
    },

    // --- Selection: Copy/Move ---
    'copymove.copyLineUp': () => {
      commandService.executeCommand('editor.action.copyLinesUpAction');
    },
    'copymove.copyLineDown': () => {
      commandService.executeCommand('editor.action.copyLinesDownAction');
    },
    'copymove.moveLineUp': () => {
      commandService.executeCommand('editor.action.moveLinesUpAction');
    },
    'copymove.moveLineDown': () => {
      commandService.executeCommand('editor.action.moveLinesDownAction');
    },
    'copymove.duplicateSelection': () => {
      commandService.executeCommand('editor.action.duplicateSelection');
    },

    // --- Selection: Advanced ---
    'selectionadvanced.addCursorAbove': () => {
      commandService.executeCommand('editor.action.insertCursorAbove');
    },
    'selectionadvanced.addCursorBelow': () => {
      commandService.executeCommand('editor.action.insertCursorBelow');
    },
    'selectionadvanced.addCursorsToLineEnds': () => {
      commandService.executeCommand('editor.action.insertCursorAtEndOfEachLineSelected');
    },
    'selectionadvanced.addNextOccurrence': () => {
      commandService.executeCommand('editor.action.addSelectionToNextFindMatch');
    },
    'selectionadvanced.addPreviousOccurrence': () => {
      commandService.executeCommand('editor.action.addSelectionToPreviousFindMatch');
    },
    'selectionadvanced.selectAllOccurrences': () => {
      commandService.executeCommand('editor.action.selectHighlights');
    },

    // --- View ---
    'view.commandPalette': () => {
      commandService.executeCommand('workbench.action.showCommands');
    },
    'view.aiAgentHistory': () => {
      commandService.executeCommand('workbench.panel.chat.view.history.focus');
    },
    'view.aiChat': () => {
      commandService.executeCommand('workbench.action.chat.open');
    },
    'view.aiConfiguration': () => {
      commandService.executeCommand('workbench.action.openSettings', '@tag:ai');
    },
    'view.callHierarchy': () => {
      commandService.executeCommand('references-view.showCallHierarchy');
    },
    'view.debug': () => {
      commandService.executeCommand('workbench.view.debug');
    },
    'view.debugConsole': () => {
      commandService.executeCommand('workbench.debug.action.toggleRepl');
    },
    'view.explorer': () => {
      commandService.executeCommand('workbench.view.explorer');
    },
    'view.extensions': () => {
      commandService.executeCommand('workbench.view.extensions');
    },
    'view.transformBinary': () => {
      commandService.executeCommand('hexEditor.openFile');
    },
    'view.outline': () => {
      commandService.executeCommand('outline.focus');
    },
    'view.plugins': () => {
      commandService.executeCommand('workbench.view.extensions');
    },
    'view.ports': () => {
      commandService.executeCommand('workbench.action.remote.showTunnelView');
    },
    'view.problems': () => {
      commandService.executeCommand('workbench.actions.view.problems');
    },
    'view.properties': () => {
      commandService.executeCommand('workbench.action.openView');
    },
    'view.references': () => {
      commandService.executeCommand('references-view.find');
    },
    'view.search': () => {
      commandService.executeCommand('workbench.view.search');
    },
    'view.sourceControl': () => {
      commandService.executeCommand('workbench.view.scm');
    },
    'view.typeHierarchy': () => {
      commandService.executeCommand('references-view.showTypeHierarchy');
    },
    'view.toggleToolbar': () => {
      commandService.executeCommand('workbench.action.toggleEditorActionsLocation');
    },
    'view.toggleWordWrap': () => {
      commandService.executeCommand('editor.action.toggleWordWrap');
    },
    'view.toggleMinimap': () => {
      commandService.executeCommand('editor.action.toggleMinimap');
    },
    'view.toggleBreadcrumbs': () => {
      commandService.executeCommand('breadcrumbs.toggle');
    },
    'view.toggleRenderWhitespace': () => {
      commandService.executeCommand('editor.action.toggleRenderWhitespace');
    },
    'view.toggleStickyScroll': () => {
      commandService.executeCommand('editor.action.toggleStickyScroll');
    },
    'view.reloadWindow': () => {
      commandService.executeCommand('workbench.action.reloadWindow');
    },

    // --- Go: Edit ---
    'edit.goBack': () => {
      commandService.executeCommand('workbench.action.navigateBack');
    },
    'edit.goForward': () => {
      commandService.executeCommand('workbench.action.navigateForward');
    },
    'edit.lastEditLocation': () => {
      commandService.executeCommand('workbench.action.navigateToLastEditLocation');
    },

    // --- Go: Goto ---
    'goto.file': () => {
      commandService.executeCommand('workbench.action.quickOpen');
    },
    'goto.symbolWorkspace': () => {
      commandService.executeCommand('workbench.action.showAllSymbols');
    },
    'goto.symbolEditor': () => {
      commandService.executeCommand('workbench.action.gotoSymbol');
    },
    'goto.dictionary': () => {
      commandService.executeCommand('editor.action.openLink');
    },
    'goto.typeDefinition': () => {
      commandService.executeCommand('editor.action.goToTypeDefinition');
    },
    'goto.implementation': () => {
      commandService.executeCommand('editor.action.goToImplementation');
    },
    'goto.reference': () => {
      commandService.executeCommand('editor.action.goToReferences');
    },
    'goto.lineColumn': () => {
      commandService.executeCommand('workbench.action.gotoLine');
    },
    'goto.bracket': () => {
      commandService.executeCommand('editor.action.jumpToBracket');
    },

    // --- Go: Traversing ---
    'traversing.nextProblem': () => {
      commandService.executeCommand('editor.action.marker.nextInFiles');
    },
    'traversing.previousProblem': () => {
      commandService.executeCommand('editor.action.marker.prevInFiles');
    },
    'traversing.nextChange': () => {
      commandService.executeCommand('workbench.action.editor.nextChange');
    },
    'traversing.previousChange': () => {
      commandService.executeCommand('workbench.action.editor.previousChange');
    },

    // --- Run: Execute ---
    'execute.startDebugging': () => {
      commandService.executeCommand('workbench.action.debug.start');
    },
    'execute.startWithoutDebugging': () => {
      commandService.executeCommand('workbench.action.debug.run');
    },
    'execute.stop': () => {
      commandService.executeCommand('workbench.action.debug.stop');
    },
    'execute.restart': () => {
      commandService.executeCommand('workbench.action.debug.restart');
    },

    // --- Run: Configurations ---
    'configurations.openConfigurations': () => {
      commandService.executeCommand('workbench.action.debug.configure');
    },
    'configurations.addConfigurations': () => {
      commandService.executeCommand('debug.addConfiguration');
    },

    // --- Run: Debugging ---
    'debugging.continue': () => {
      commandService.executeCommand('workbench.action.debug.continue');
    },
    'debugging.continueAll': () => {
      commandService.executeCommand('workbench.action.debug.continueAll');
    },
    'debugging.stepOver': () => {
      commandService.executeCommand('workbench.action.debug.stepOver');
    },
    'debugging.stepInto': () => {
      commandService.executeCommand('workbench.action.debug.stepInto');
    },
    'debugging.stepOut': () => {
      commandService.executeCommand('workbench.action.debug.stepOut');
    },
    'debugging.pause': () => {
      commandService.executeCommand('workbench.action.debug.pause');
    },
    'debugging.pauseAll': () => {
      commandService.executeCommand('workbench.action.debug.pauseAll');
    },
    'debugging.toggleBreakpoint': () => {
      commandService.executeCommand('editor.debug.action.toggleBreakpoint');
    },
    'debugging.addConditionalBreakpoint': () => {
      commandService.executeCommand('editor.debug.action.conditionalBreakpoint');
    },
    'debugging.addInlineBreakpoint': () => {
      commandService.executeCommand('editor.debug.action.toggleInlineBreakpoint');
    },
    'debugging.addFunctionBreakpoint': () => {
      commandService.executeCommand('workbench.debug.viewlet.action.addFunctionBreakpointAction');
    },
    'debugging.addLogpoint': () => {
      commandService.executeCommand('editor.debug.action.toggleLogPoint');
    },
    'debugging.enableAllBreakpoints': () => {
      commandService.executeCommand('workbench.debug.viewlet.action.enableAllBreakpoints');
    },
    'debugging.disableAllBreakpoints': () => {
      commandService.executeCommand('workbench.debug.viewlet.action.disableAllBreakpoints');
    },
    'debugging.removeAllBreakpoints': () => {
      commandService.executeCommand('workbench.debug.viewlet.action.removeAllBreakpoints');
    },

    // --- Terminal: Main ---
    'terminal.new': () => {
      commandService.executeCommand('workbench.action.terminal.new');
    },
    'terminal.newWithProfile': () => {
      commandService.executeCommand('workbench.action.terminal.newWithProfile');
    },
    'terminal.toggle': () => {
      commandService.executeCommand('workbench.action.terminal.toggleTerminal');
    },
    'terminal.focus': () => {
      commandService.executeCommand('workbench.action.terminal.focus');
    },

    // --- Terminal: Layout ---
    'terminal.split': () => {
      commandService.executeCommand('workbench.action.terminal.split');
    },
    'terminal.unsplit': () => {
      commandService.executeCommand('workbench.action.terminal.unsplit');
    },
    'terminal.kill': () => {
      commandService.executeCommand('workbench.action.terminal.kill');
    },
    'terminal.clear': () => {
      commandService.executeCommand('workbench.action.terminal.clear');
    },

    // --- Terminal: Run ---
    'terminal.runSelectedText': () => {
      commandService.executeCommand('workbench.action.terminal.runSelectedText');
    },
    'terminal.runActiveFile': () => {
      commandService.executeCommand('workbench.action.terminal.runActiveFile');
    },
    'terminal.configureTasks': () => {
      commandService.executeCommand('workbench.action.tasks.configureTaskRunner');
    },
    'terminal.openExternal': () => {
      commandService.executeCommand('workbench.action.terminal.openNativeConsole');
    },

    // --- Terminal: Navigate ---
    'terminal.previous': () => {
      commandService.executeCommand('workbench.action.terminal.focusPrevious');
    },
    'terminal.next': () => {
      commandService.executeCommand('workbench.action.terminal.focusNext');
    },
    'terminal.selectDefaultProfile': () => {
      commandService.executeCommand('workbench.action.terminal.selectDefaultProfile');
    },
    'terminal.settings': () => {
      commandService.executeCommand('workbench.action.openSettings', '@feature:terminal');
    },

    // --- Help: Documentation ---
    'help.documentation': () => {
      commandService.executeCommand('workbench.action.openDocumentationUrl');
    },
    'help.releaseNotes': () => {
      commandService.executeCommand('update.showCurrentReleaseNotes');
    },
    'help.getStarted': () => {
      commandService.executeCommand('workbench.action.openWalkthrough');
    },
    'help.keyboardShortcutsReference': () => {
      commandService.executeCommand('workbench.action.keybindingsReference');
    },

    // --- Help: Online ---
    'help.community': () => {
      commandService.executeCommand('workbench.action.openCommunityDiscussionsUrl');
    },
    'help.githubRepository': () => {
      commandService.executeCommand('workbench.action.openIssueReporter');
    },
    'help.reportIssue': () => {
      commandService.executeCommand('workbench.action.openIssueReporter');
    },
    'help.viewLicense': () => {
      commandService.executeCommand('workbench.action.showLicenseText');
    },

    // --- Help: About ---
    'help.checkForUpdates': () => {
      commandService.executeCommand('update.checkForVSCodeUpdate');
    },
    'help.about': () => {
      commandService.executeCommand('workbench.action.showAboutDialog');
    },
    'help.welcome': () => {
      commandService.executeCommand('workbench.action.showWelcomePage');
    },
  };
}

/** Split an array into chunks of fixed size, padding the last chunk with nulls */
function chunkArray<T>(arr: T[], size: number): (T | null)[][] {
  const result: (T | null)[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size) as (T | null)[];
    while (chunk.length < size) chunk.push(null); // pad for "grid" behavior
    result.push(chunk);
  }
  return result;
}

/**
 * Segment model:
 *  - large: one big button plus an array of dropdown items
 *  - inline-column: up to 3 inline items (or nulls for empty slots)
 */
type LargeSegment = {
  type: 'large';
  button: RibbonButton;
  dropdownItems: RibbonButton[];
};

type InlineColumnSegment = {
  type: 'inline-column';
  rows: (RibbonButton | null)[];
};

type Segment = LargeSegment | InlineColumnSegment;

/**
 * Parse a chunk's buttons into segments.
 * - `dropdown-element` items attach to the previously seen large button.
 * - Inline items either render as grid columns, or are treated as dropdown items
 *   when `collapseInline` is true.
 */
function parseSegments(
  buttons: RibbonButton[],
  collapseInline: boolean
): Segment[] {
  const segments: Segment[] = [];
  let pendingInline: RibbonButton[] = [];
  let lastLarge: LargeSegment | null = null;

  const flushInline = () => {
    if (pendingInline.length === 0) return;
    const columns = chunkArray(pendingInline, 3);
    for (const col of columns) {
      segments.push({ type: 'inline-column', rows: col });
    }
    pendingInline = [];
  };

  for (const btn of buttons) {
    if (btn.position === 'dropdown-element') {
      if (lastLarge) lastLarge.dropdownItems.push(btn);
      continue;
    }

    if (btn.position === 'inline') {
      if (collapseInline && lastLarge) {
        // When this chunk is collapsed, inline becomes dropdown items
        lastLarge.dropdownItems.push(btn);
      } else {
        pendingInline.push(btn);
      }
      continue;
    }

    if (btn.position === 'large') {
      flushInline();
      const seg: LargeSegment = {
        type: 'large',
        button: btn,
        dropdownItems: []
      };
      segments.push(seg);
      lastLarge = seg;
      continue;
    }

    // Fallback
    pendingInline.push(btn);
  }

  flushInline();
  return segments;
}

const Ribbon: React.FC<RibbonProps> = props => {
  const commandMap = React.useMemo(
    () => createRibbonCommandMap(props.commandService),
    [props.commandService]
  );
  
  const invokeCommand = React.useCallback(
    (button: RibbonButton) => {
      const handler = commandMap[button.id];
      if (!handler) {
        // Optionally: log or no-op
        // console.warn('No command for', button.id);
        return;
      }
      handler();
    },
    [commandMap]
  );

  const [selectedTabId, setSelectedTabId] = React.useState<string>(
    ribbonConfig[0]?.id ?? 'file'
  );

  const activeTab: RibbonTab | undefined = ribbonConfig.find(
    tab => tab.id === selectedTabId
  );

  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Track which split button's menu is open (by large button id)
  const [openDropdownId, setOpenDropdownId] = React.useState<string | null>(null);
  const [openDropdownAlignRight, setOpenDropdownAlignRight] = React.useState<boolean>(false);

  const chunkRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const [collapsedChunks, setCollapsedChunks] = React.useState<Record<string, boolean>>({});

  // Optional: close dropdown on tab change
  React.useEffect(() => {
    setOpenDropdownId(null);
  }, [selectedTabId]);

  React.useEffect(() => {
    const recomputeCollapsedChunks = () => {
      const containerEl = containerRef.current;
      if (!containerEl || !activeTab) return;

      const containerRect = containerEl.getBoundingClientRect();
      const next: Record<string, boolean> = {};

      for (const chunk of activeTab.chunks) {
        const el = chunkRefs.current[chunk.id];
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        // Collapse this chunk if its right edge is beyond the ribbon’s right edge
        next[chunk.id] = rect.right > containerRect.right;
      }

      setCollapsedChunks(prev => {
        let changed = false;
        const keys = new Set([...Object.keys(prev), ...Object.keys(next)]);
        for (const k of keys) {
          if (prev[k] !== next[k]) {
            changed = true;
            break;
          }
        }
        return changed ? next : prev;
      });
    };

    recomputeCollapsedChunks();
    window.addEventListener('resize', recomputeCollapsedChunks);
    return () => window.removeEventListener('resize', recomputeCollapsedChunks);
  }, [activeTab]);

  const toggleDropdown = (
    id: string,
    triggerElement: HTMLElement | null
  ) => {
    if (openDropdownId === id) {
      setOpenDropdownId(null);
      return;
    }

    const containerEl = containerRef.current;
    const wrapperEl = triggerElement
      ? (triggerElement.closest(
          '.nautical-ribbon__action-wrapper'
        ) as HTMLElement | null)
      : null;

    let alignRight = false;

    if (containerEl && wrapperEl) {
      const containerRect = containerEl.getBoundingClientRect();
      const wrapperRect = wrapperEl.getBoundingClientRect();

      // If aligning left would move any part of the menu left of the ribbon,
      // treat that as overflow and align to the right instead.
      if (wrapperRect.left < containerRect.left) {
        alignRight = true;
      }
    }

    setOpenDropdownAlignRight(alignRight);
    setOpenDropdownId(id);
  };

  return (
    <div className="nautical-titlebar__ribbon">
      <div className="nautical-ribbon__tabs">
        {ribbonConfig.map(tab => (
          <button
            key={tab.id}
            className={
              'nautical-ribbon__tab ' +
              (selectedTabId === tab.id ? 'nautical-ribbon__tab-selected' : '')
            }
            onClick={() => setSelectedTabId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="nautical-ribbon__tab-container" ref={containerRef}>
        {activeTab?.chunks.map((chunk: RibbonChunk) => {
          const segments = parseSegments(
            chunk.buttons,
            collapsedChunks[chunk.id] ?? false);

          return (
            <div
              key={chunk.id}
              className="nautical-ribbon__chunk"
              ref={el => {
                chunkRefs.current[chunk.id] = el;
              }}
            >
              <div className="nautical-ribbon__chunk-buttons">
                {segments.map((seg, si) => {
                  if (seg.type === 'large') {
                    const Icon = seg.button.icon ? iconMap[seg.button.icon] : undefined;
                    const hasDropdown = seg.dropdownItems.length > 0;
                    const isOpen = openDropdownId === seg.button.id;

                    return (
                      <div
                        key={seg.button.id}
                        className={
                          'nautical-ribbon__action-wrapper' +
                          (hasDropdown ? ' nautical-ribbon__action-wrapper--split' : '')
                        }
                      >
                        <button
                          className="nautical-ribbon__action nautical-ribbon__action--large"
                          title={seg.button.label}
                          aria-label={seg.button.label}
                          onClick={() => invokeCommand(seg.button)}
                        >
                          <div className="nautical-ribbon__action-icon">
                            {Icon ? <Icon size={24} /> : null}
                          </div>
                          <div className="nautical-ribbon__action-label">
                            {seg.button.label}
                          </div>
                        </button>

                        {hasDropdown && (
                          <div className="nautical-ribbon__dropdown-container">
                            <button
                              className="nautical-ribbon__action-dropdown-trigger"
                              aria-haspopup="menu"
                              aria-expanded={isOpen}
                              aria-label={`${seg.button.label} options`}
                              title={`${seg.button.label} options`}
                              onClick={e => toggleDropdown(seg.button.id, e.currentTarget)}
                            >
                              <ChevronDown size={14} />
                            </button>

                            {isOpen && (
                              <div
                                className={
                                  'nautical-ribbon__dropdown-menu ' +
                                  (openDropdownAlignRight
                                    ? 'nautical-ribbon__dropdown-menu--right'
                                    : 'nautical-ribbon__dropdown-menu--left')
                                }
                                role="menu"
                              >
                                {seg.dropdownItems.map(item => {
                                  const ItemIcon = item.icon
                                    ? iconMap[item.icon]
                                    : undefined;
                                  return (
                                    <button
                                      key={item.id}
                                      className="nautical-ribbon__dropdown-item"
                                      role="menuitem"
                                      title={item.label}
                                      aria-label={item.label}
                                      // TODO: wire dropdown item action
                                      onClick={() => {
                                        invokeCommand(item);
                                        setOpenDropdownId(null);
                                      }}
                                    >
                                      {ItemIcon && (
                                        <span className="nautical-ribbon__dropdown-item-icon">
                                          <ItemIcon size={16} />
                                        </span>
                                      )}
                                      <span className="nautical-ribbon__dropdown-item-label">
                                        {item.label}
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  }

                  // Inline columns (up to 3 per column, grid-style)
                  return (
                    <div
                      key={`inline-col-${si}`}
                      className="nautical-ribbon__inline-group"
                    >
                      {seg.rows.map((button, ri) =>
                        button ? (() => {
                          const Icon = button.icon ? iconMap[button.icon] : undefined;
                          return (
                            <button
                              key={button.id}
                              className="nautical-ribbon__action nautical-ribbon__action--inline"
                              title={button.label}
                              aria-label={button.label}
                              onClick={() => invokeCommand(button)}
                            >
                              <div className="nautical-ribbon__action-icon">
                                {Icon ? <Icon size={16} /> : null}
                              </div>
                              <div className="nautical-ribbon__action-label">
                                {button.label}
                              </div>
                            </button>
                          );
                        })() : (
                          <div
                            key={`empty-${ri}`}
                            className="nautical-ribbon__action--inline-empty"
                          />
                        )
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="nautical-ribbon__chunk-label">
                {chunk.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ribbon;