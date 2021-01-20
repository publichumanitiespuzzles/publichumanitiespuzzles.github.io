// mfAcrostic 1.0.2 © 2014-2021 David Murchie & Monday Fills. All rights reserved.

$.fn.mfAcrostic = function(options) {


const acrosticTemplate = `
    <div class="mfa-acrostic-outer-wrapper">
        <div id="mfa-loading-spinner">
            <div class="mfa-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><br>
            <p>Loading puzzle...</p>
        </div>
        <div id="mfa-loading-error">
            <img src="/assets/mfacrostic/images/mmf_icons/error.svg" alt="Error"><br>
            <span>There was an error loading this puzzle</span><br>
            <span class="msg"></span>
        </div>
    
        <div class="mfa-puzzle-wrapper mfa-acrostic-wrapper">
            <input type="text" id="mfa-magic-field" name="mfa-magic-field" value=""
                   data-mfa-cookie-name="" data-errors-shown="2" data-success-shown="2" autocorrect="off" spellcheck="false" autocomplete="off">

            <div id="mfa-header" class="mfa-puzzle-header">

                <div class="mfa-puzzle-header-inner">
                <div class="mfa-cover">
                    <span class="mfa-acrostic-title">Acrostic</span>
                    <span class="mfa-acrostic-byline"></span>
                </div>

                <div id="mfa-toolbar">
                    <div class="mfa-btn-group">
                        <button id="mfa-nav-check-btn" class="mfa-btn mfa-dropdown" title="Check for Errors">
                            <div id="mfa-nav-check" class="mfa-dropdown-toggle" title="Check for errors">
                                <span class="mfa-icon mfa-icon-search mfa-icon-lg"></span>
                            </div>
                            <div class="mfa-dropdown-menu mfa-dropdown-menu-left mfa-icon-inline">
                                <a id="mfa-nav-check-letter" class="mfa-dropdown-item">
                                    <span class="mfa-icon mfa-icon-search mfa-icon-lg"></span> Check Letter
                                </a>
                                <a id="mfa-nav-check-word" class="mfa-dropdown-item">
                                    <span class="mfa-icon mfa-icon-search mfa-icon-lg"></span> Check Word
                                </a>
                                <a id="mfa-nav-check-puzzle" class="mfa-dropdown-item">
                                    <span class="mfa-icon mfa-icon-search mfa-icon-lg"></span> Check Puzzle
                                </a>
                                <a id="mfa-nav-check-auto" class="mfa-dropdown-item">
                                    <span>Auto-Check</span>
                                </a>
                            </div>
                        </button>
                        <button class="mfa-btn mfa-dropdown" title="Reveal Answers">
                            <div id="mfa-nav-show" class="mfa-dropdown-toggle" title="Show answers">
                                <span class="mfa-icon mfa-icon-eye mfa-icon-lg"></span>
                            </div>
                            <div class="mfa-dropdown-menu mfa-icon-inline">
                                <a id="mfa-nav-show-letter" class="mfa-dropdown-item">
                                    <span class="mfa-icon mfa-icon-eye mfa-icon-lg"></span> Show Letter
                                </a>
                                <a id="mfa-nav-show-word" class="mfa-dropdown-item">
                                    <span class="mfa-icon mfa-icon-eye mfa-icon-lg"></span> Show Word
                                </a>
                                <a id="mfa-nav-show-puzzle" class="mfa-dropdown-item">
                                    <span class="mfa-icon mfa-icon-eye mfa-icon-lg"></span> Show Puzzle
                                </a>
                            </div>
                        </button>
                        <button class="mfa-btn mfa-dropdown">
                            <div id="mfa-nav-show" class="mfa-dropdown-toggle" title="Print">
                                <span class="mfa-icon mfa-icon-print mfa-icon-lg"></span>
                            </div>
                            <div class="mfa-dropdown-menu mfa-icon-inline">
                                <a id="#mfa-nav-print-acrostic" class="mfa-dropdown-item mfa-print-url mfa-print-only" target="mfanew">
                                    <span class="mfa-icon mfa-icon-print mfa-icon-lg"></span> Print Acrostic
                                </a>
                                <a id="mfa-nav-print-solution" class="mfa-dropdown-item mfa-solution-url mfa-solution-only" target="mfanew">
                                    <span class="mfa-icon mfa-icon-print mfa-icon-lg"></span> Print Solution
                                </a>
                            </div>
                        </button>
                        <button class="mfa-btn mfa-dropdown" title="Settings">
                            <div class="mfa-dropdown-toggle" title="Settings">
                                <span class="mfa-icon mfa-icon-cog mfa-icon-lg"></span>
                            </div>
                            <div class="mfa-dropdown-menu mfa-icon-inline">
                                <a id="mfa-nav-settings" class="mfa-dropdown-item">
                                    <span class="mfa-icon mfa-icon-colors mfa-icon-lg"></span> Change Colors
                                </a>
                                <a id="mfa-nav-clear" class="mfa-dropdown-item">
                                    <span class="mfa-icon mfa-icon-trash mfa-icon-lg"></span> Clear Puzzle
                                </a>
                                <a id="mfa-puzzle-help" class="mfa-dropdown-item">
                                    <span class="mfa-icon mfa-icon-question mfa-icon-lg"></span> Help
                                </a>
                            </div>
                        </button>
                    </div>
                </div>
                </div>
            </div>
    
            <div id="mfa-main">

                <div id="mfa-author" class="mfa-section-outer">
                    <h5>Quote author and title of work:</h5>
                    <div class="mfa-section-wrapper">
                        <div class="mfa-section"></div>
                    </div>
                </div>

                <div id="mfa-grid" class="mfa-section-outer">
                    <div class="mfa-section-wrapper">
                        <div class="mfa-section"></div>
                    </div>
                </div>

                <div id="mfa-solver" class="mfa-section-outer">
                    <button id="mfa-solver-prev" class="mfa-solver-btn"><img src="/assets/mfacrostic/images/mmf_icons/chevron-left.svg" class="mfa-solver-arrow" alt="prev"></button>
                    <div class="mfa-section"></div>
                    <button id="mfa-solver-next" class="mfa-solver-btn"><img src="/assets/mfacrostic/images/mmf_icons/chevron-right.svg" class="mfa-solver-arrow" alt="next"></button>
                </div>

                <div id="mfa-clues" class="mfa-section-outer">
                    <div class="mfa-section"></div>
                </div>
            </div>
    
            <div class="mfa-footer">
                <a href="https://mfacrostic.mondayfills.com/" target="mfanew">Software &copy; <span class="mfa-copyright-year">2021</span> Dave Murchie. All rights reserved.</a>
            </div>


                <!-- ************************************************** -->
                <!-- START ALL MODALS -->
                <div id="mfaModalTemplates" class="mfa-modal-close">
                    <div class="mfa-modal-inner mfa-modal-close">
                        <div id="mfa-widthWarningModal" class="mfa-modal">
                            <button type="button" class="mfa-modal-close mfa-times">&times;</button>
                            <div class="mfa-modal-body">
                                <h3>Warning...</h3>
                                <p>
                                    Your screen may be too small for for an optimal online acrostic solving experience.
                                    A minimum browser width of 1200px is recommended, and your browser window appears to be <span id="mfa-window-width">too small</span>.
                                </p>
                                <p class="mfa-print-only">Click the print button solve on paper.</p>
                            </div>
                            <div class="mfa-modal-footer">
                                <button type="button" class="mfa-btn mfa-modal-close">Close</button>
                            </div>
                        </div>
    
                        <div id="mfa-noErrorModal" class="mfa-modal">
                            <button type="button" class="mfa-modal-close mfa-times">&times;</button>
                            <div class="mfa-modal-body">
                                <h3>Congratulations!</h3>
                                <p>No errors found</p>
                            </div>
                            <div class="mfa-modal-footer">
                                <button type="button" class="mfa-btn mfa-modal-close">Close</button>
                            </div>
                        </div>
    
                    
                        <div id="mfa-stillErrorsModal" class="mfa-modal">
                            <button type="button" class="mfa-modal-close mfa-times">&times;</button>
                            <div class="mfa-modal-body">
                                <h3>You're Almost There!</h3>
                                <p>You've filled in every letter, but there's still at least one error in your solution. Don't give up now!</p>
                            </div>
                            <div class="mfa-modal-footer">
                                <button type="button" class="mfa-btn mfa-modal-close">Close</button>
                            </div>
                        </div>
    
                    
                        <div id="mfa-finishedModal" class="mfa-modal">
                            <button type="button" class="mfa-modal-close mfa-times">&times;</button>
                            <div class="mfa-modal-body">
                                <h3>Congratulations!</h3>
                                You've correctly solved the puzzle!
                                <div class="mfa-friendly-container">
                                    <div class="mfa-friendly-quote"></div>
                                    <div class="mfa-friendly-author"></div>
                                </div>
                            </div>
                            <div class="mfa-modal-footer">
                                <button type="button" class="mfa-btn mfa-modal-close">Return to Puzzle</button>
                            </div>
                        </div>
    
                    
                        <div id="mfa-settingsModal" class="mfa-modal">
                            <button type="button" class="mfa-modal-close mfa-times">&times;</button>
                            <div class="mfa-modal-body">
                                <h3>Settings</h3>
                                <div id="mfa-color-demo">
                                    <small>Preview:</small><br>
                                    <div class="mfa-demo-section">
                                        <div class="mfa-demo-square mfa-demo-active-word">
                                            <div class="mfa-demo-input">F</div>
                                            <div class="mfa-demo-number">78</div>
                                            <div class="mfa-demo-ordinal">D</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-focused">
                                            <div class="mfa-demo-input">O</div>
                                            <div class="mfa-demo-number">79</div>
                                            <div class="mfa-demo-ordinal">E</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-active-word">
                                            <div class="mfa-demo-input">C</div>
                                            <div class="mfa-demo-number">80</div>
                                            <div class="mfa-demo-ordinal">F</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-active-word">
                                            <div class="mfa-demo-input">U</div>
                                            <div class="mfa-demo-number">81</div>
                                            <div class="mfa-demo-ordinal">G</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-active-word">
                                            <div class="mfa-demo-input">S</div>
                                            <div class="mfa-demo-number">82</div>
                                            <div class="mfa-demo-ordinal">H</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-active-word">
                                            <div class="mfa-demo-input">I</div>
                                            <div class="mfa-demo-number">83</div>
                                            <div class="mfa-demo-ordinal">I</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-active-word">
                                            <div class="mfa-demo-input">N</div>
                                            <div class="mfa-demo-number">84</div>
                                            <div class="mfa-demo-ordinal">J</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-active-word">
                                            <div class="mfa-demo-input">A</div>
                                            <div class="mfa-demo-number">85</div>
                                            <div class="mfa-demo-ordinal">K</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-active-word">
                                            <div class="mfa-demo-input">W</div>
                                            <div class="mfa-demo-number">86</div>
                                            <div class="mfa-demo-ordinal">L</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-active-word">
                                            <div class="mfa-demo-input">O</div>
                                            <div class="mfa-demo-number">87</div>
                                            <div class="mfa-demo-ordinal">M</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-active-word">
                                            <div class="mfa-demo-input">R</div>
                                            <div class="mfa-demo-number">88</div>
                                            <div class="mfa-demo-ordinal">N</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-active-word">
                                            <div class="mfa-demo-input">D</div>
                                            <div class="mfa-demo-number">89</div>
                                            <div class="mfa-demo-ordinal">O</div>
                                        </div>
                                        <div class="mfa-black"></div>
                                        <div class="mfa-demo-square">
                                            <div class="mfa-demo-input">A</div>
                                            <div class="mfa-demo-number">90</div>
                                            <div class="mfa-demo-ordinal">P</div>
                                        </div>
                                        <div class="mfa-demo-square">
                                            <div class="mfa-demo-input">C</div>
                                            <div class="mfa-demo-number">91</div>
                                            <div class="mfa-demo-ordinal">Q</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-active">
                                            <div class="mfa-demo-input">T</div>
                                            <div class="mfa-demo-number">92</div>
                                            <div class="mfa-demo-ordinal">R</div>
                                        </div>
                                        <div class="mfa-demo-square">
                                            <div class="mfa-demo-input">I</div>
                                            <div class="mfa-demo-number">93</div>
                                            <div class="mfa-demo-ordinal">S</div>
                                        </div>
                                        <div class="mfa-demo-square">
                                            <div class="mfa-demo-input">V</div>
                                            <div class="mfa-demo-number">94</div>
                                            <div class="mfa-demo-ordinal">T</div>
                                        </div>
                                        <div class="mfa-demo-square">
                                            <div class="mfa-demo-input">E</div>
                                            <div class="mfa-demo-number">95</div>
                                            <div class="mfa-demo-ordinal">U</div>
                                        </div>
                                        <div class="mfa-black"></div>
                                        <div class="mfa-demo-square">
                                            <div class="mfa-demo-input">H</div>
                                            <div class="mfa-demo-number">96</div>
                                            <div class="mfa-demo-ordinal">V</div>
                                        </div>
                                        <div class="mfa-demo-square">
                                            <div class="mfa-demo-input">O</div>
                                            <div class="mfa-demo-number">97</div>
                                            <div class="mfa-demo-ordinal">W</div>
                                        </div>
                                        <div class="mfa-demo-square mfa-demo-hover">
                                            <div class="mfa-demo-input">V</div>
                                            <div class="mfa-demo-number">98</div>
                                            <div class="mfa-demo-ordinal">X</div>
                                        </div>
                                        <div class="mfa-demo-square">
                                            <div class="mfa-demo-input">E</div>
                                            <div class="mfa-demo-number">99</div>
                                            <div class="mfa-demo-ordinal">Y</div>
                                        </div>
                                        <div class="mfa-demo-square">
                                            <div class="mfa-demo-input">R</div>
                                            <div class="mfa-demo-number">100</div>
                                            <div class="mfa-demo-ordinal">Z</div>
                                        </div>
                                        <div class="mfa-black"></div>
                                    </div>
                                    <small>* Current setting</small>
                                </div><br>

            
                                <div id="mfa-color-options"></div>
                                <div id="mfa-color-options-template">
                                    <button class="mfa-chip-btn">
                                        <p class="mfa-color-name"></p>
                                        <p class="mfa-color-chip mfa-demo-focused">&nbsp;
                                        </p><p class="mfa-color-chip mfa-demo-active">&nbsp;
                                    </p><p class="mfa-color-chip mfa-demo-active-word">&nbsp;
                                    </p><p class="mfa-color-chip mfa-demo-hover">&nbsp;
                                    </p>
                                    </button>
                                </div>
                            </div>
                            <div class="mfa-modal-footer">
                                <button type="button" class="mfa-btn mfa-modal-close" data-dismiss="modal">Cancel</button>
                                <button type="button" id="mfa-btn-save-settings" class="mfa-btn mfa-btn-dk mfa-modal-close">Save Settings</button>
                            </div>
                        </div>
                    
    
                        <div id="mfa-confirmationModal" class="mfa-modal mfa-modal-sm">
                            <button type="button" class="mfa-modal-close mfa-times">&times;</button>
                            <div class="mfa-modal-body">
                                <h3 id="mfa-confirm-title">Confirm</h3>
                                <p>Are you sure you want to <span id="mfa-confirm-text">proceed</span>?</p>
                            </div>
                            <div class="mfa-modal-footer">
                                <button type="button" class="mfa-btn mfa-modal-close">Cancel</button>
                                <button type="button" class="mfa-btn mfa-btn-dk" id="mfa-confirm-proceed">Proceed</button>
                            </div>
                        </div>
                    
    
                        <div id="mfa-helpModal" class="mfa-modal mfa-modal-md">
                            <button type="button" class="mfa-modal-close mfa-times">&times;</button>
                            <div class="mfa-modal-body">
                                <!--ACROSTIC HELP-->
                                <div class="mfa-cols">
                                    <div>
                                        <h3>
                                            mfAcrostic Help
                                        </h3>
                                        <p>
                                            <span class="mfa-icon mfa-icon-drop-cap"></span> The object of an Acrostic is to reveal a quote, its author, and the title of its source by solving a series of indexed word clues and transferring their solutions to an indexed quote grid. Acrostics are presented in three pieces: the quote author and title of work; the quote itself; and the clues/word list.
                                        </p>
                                        <p>
                                            Start by looking for easy-to-solve word clues at the bottom. Also search the quote for one-letter words (which are almost always A or I). Periodically scan the quote for short words that you can you can complete once you have a few letters, and continue working back and forth between the grid and the clues until complete.
                                        </p>
                                        <p>
                                            When you’re done, the grid will spell out a quote, and the first letters of the clue answers at the bottom will form the "acrostic" at the top which spells out the quote's author and the title of the source.
                                        </p>
                                        <p>
                                            Black squares in the grid indicate the end of a word, and punctuation is omitted in the grid (apostrophes, commas, periods, etc.).
                                        </p>
                
                                        <p><span class="mfa-icon mfa-icon-external-link mfa-icon-lg"></span> <a href="https://en.wikipedia.org/wiki/Acrostic_(puzzle)" target="mfanew">Click for more about Acrostics at Wikipedia</a></p>
                                    </div>
                                    <div>
                                        <h5>Buttons & Menus</h5>
                                        <ul class="mfa-icon-ul">
                                            <li><span class="mfa-icon mfa-icon-print mfa-icon-lg"></span><strong>Print</strong> opens a print-friendly version of the puzzle or puzzle solution in a new window.</li>
                                            <li><span class="mfa-icon mfa-icon-search mfa-icon-lg"></span><strong>Check for Errors</strong> with a single letter, a whole word, or the entire puzzle. Indicates errors with <span class="text-danger">red</span> text.</li>
                                            <li class="ml-1"><span class="mfa-icon mfa-icon-search mfa-icon-lg"></span><strong>Enable/Disable Auto-Check</strong> is like "Check for Errors" but continuously checks all letters as an acrostic is being solved.</li>
                                            <li><span class="mfa-icon mfa-icon-eye mfa-icon-lg"></span><strong>Show Answers</strong> inserts the correct solution for a single letter, a whole word, or the entire puzzle.</li>
                                            <li><span class="mfa-icon mfa-icon-cog mfa-icon-lg"></span><strong>Settings</strong> menu:</li>
                                            <li class="ml-1"><span class="mfa-icon mfa-icon-colors mfa-icon-lg"></span><strong>Change Colors</strong> lets you select a color scheme for the solving app.</li>
                                            <li class="ml-1"><span class="mfa-icon mfa-icon-trash mfa-icon-lg"></span><strong>Clear Puzzle</strong> clears all entries from the puzzle, and deletes any saved progress.</li>
                                            <li class="ml-1"><span class="mfa-icon mfa-icon-question mfa-icon-lg"></span><strong>Help</strong> displays this page.</li>
                                        </ul>
                
                                        <h5>Shortcuts</h5>
                                        <ul class="mfa-icon-ul">
                                            <li><span class="mfa-icon mfa-icon-tab mfa-icon-lg"></span><strong>Tab</strong> Toggles through author/title, grid, and clues sections.</li>
                                            <li><span class="mfa-icon mfa-icon-arrows mfa-icon-lg"></span><strong>Arrow Keys</strong> Move around the letters in the current section.</li>
                                            <li><span class="mfa-icon mfa-icon-backspace mfa-icon-lg"></span><strong>Delete/Backspace</strong> Remove the current letter.</li>
                                            <li><span class="mfa-icon mfa-icon-mouse-pointer mfa-icon-lg"></span><strong>Mouse-Click</strong> to focus on a letter or use on-screen arrows.</li>
                                        </ul>
                
                                    </div>
                                </div>
                
                                <div class="mfa-alert mt-2">
                                    For comments, help, or to report a bug, <a href="https://mfacrostic.mondayfills.com" target="mfanew">click here</a>
                                </div>
                
                            </div>
                            <div class="mfa-modal-footer">
                                <button type="button" class="mfa-btn mfa-modal-close">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END ALL MODALS -->
                <!-- ************************************************** -->

        </div>
        <!-- end container -->
    
    </div>
`;

const badBrowserTemplate = `
    <div class="mfa-acrostic-outer-wrapper mfa-browser-support">
        <div>
            <h1 class="mb-1 mt-0 b-0"><a class="mfa-print-url" target="mfanew">Acrostic</a></h1>
            <a class="mfa-print-url mfa-btn mfa-btn-lg" target="mfanew"><span class="mfa-icon mfa-icon-print mfa-icon-lg mfa-icon-inline"></span> Print Acrostic</a><br>
            <a class="mfa-solution-url mfa-small-text mt-1" target="mfanew">print solution</a>
            <p class="mt-2">
                This browser is not supported by our solving app :-(
            </p>
            <a class="mfa-support-footer" href="https://mfacrostic.mondayfills.com" target="mfanew">mfAcrostic</a>
        </div>
    </div>
`;



    const thisAcrosticEl = $(this);

    // Globals you might change in settings
    let puzzleJson = options.puzzle;
    let printPuzzle = options.print;
    let printSolution = options.solution;
    let defaultEm = !isNaN(options.defaultEm) ? options.defaultEm : 18;
    let maxCols = !isNaN(options.maxCols) ? options.maxCols : false;
    let maxWidth = !isNaN(options.maxWidth) ? options.maxWidth : false;
    let minWidth = !isNaN(options.minWidth) ? options.minWidth : 240;
    minWidth = isNaN(maxWidth) ? minWidth : Math.min(maxWidth, minWidth);
    let hideHeader = options.hideHeader || false;
    let showGridPad = options.showGridPad || 'grid';
    let colorScheme = options.colorScheme;
    let disableStorage = options.disableStorage;
    let disableAutoFocus = options.disableAutoFocus || false;

    // Check browser... dump out if no ES6 support
    if (!browserCheck()) {
        return false;
    }

    // active, active-word, focused, hover
    let mfaColorSets = [
        'mfa-colors-default',
        'mfa-colors-gray',
        'mfa-colors-green',
        'mfa-colors-blue',
        'mfa-colors-purple',
        'mfa-colors-red',
        'mfa-colors-orange',
        'mfa-colors-pastels',
        'mfa-colors-bright',
        'mfa-colors-contrast'
    ];

    // Globals you won't change
    let cookieName = 'mf-acrostic-puzzle-data';
    let acrostic = {};
    let squares = {};
    let gridSquares = [];
    let authorSquares = [];
    let cluesSquares = [];
    let quote = '';
    let wordCounter = 0;
    let colCount = 0;
    let authorDone = {};
    let gridDone = {};
    let solverDone = {};
    let cluesDone = {};

    thisAcrosticEl.html(acrosticTemplate).css('font-size', defaultEm + 'px');

    let thisMagicField = thisAcrosticEl.find('#mfa-magic-field');

    // Disable storage
    if (disableStorage) {
        localStorage.removeItem(cookieName);
    }


    function browserCheck() {
        // Handle old browsers - show print-only div
        let mfaBrowserCheck = function() {
            try {
                new Function("(a = 0) => a"); // ES6 test
                return true;
            } catch (err) {
                return false;
            }
        }();
        if (!mfaBrowserCheck) {
            thisAcrosticEl.html(badBrowserTemplate);
            setFileLinks();
            return false;
        } else {
            return true;
        }
    }

    // Set file links
    function setFileLinks(){
        if (printPuzzle) {
            thisAcrosticEl.find('.mfa-print-url').each(function (index, element) {
                if ($(element).is('a')) {
                    $(element).attr('href', printPuzzle);
                }
            });
            thisAcrosticEl.find('.mfa-print-only').removeClass('mfa-print-only');
        }
        if (printSolution) {
            thisAcrosticEl.find('.mfa-solution-url').each(function (index, element) {
                if ($(element).is('a')) {
                    $(element).attr('href', printSolution);
                }
            });
            thisAcrosticEl.find('.mfa-solution-only').removeClass('mfa-solution-only');
        }
    }
    setFileLinks();

    // Get json data
    if (typeof puzzleJson === 'object') {
        acrostic = puzzleJson;
        loadPuzzlePage(acrostic);
    } else {
        $.getJSON(puzzleJson).done(function (data) {
            acrostic = data;
            loadPuzzlePage(acrostic);
        }).fail(function (jqXHR, textStatus) {
            thisAcrosticEl.find('#mfa-loading-spinner').fadeOut( function() { thisAcrosticEl.find('#mfa-loading-error').fadeIn(); });
            console.error('mfAcrostic has no puzzle data: ' + textStatus);
            return false;
        });
    }

    function loadPuzzlePage(data) {
        // create a unique-ish save key
        acrostic.saveKey = (data.title).replace(/\W/g,'').slice(0,10).toUpperCase() + '_' +
                acrostic['quote'].match(/\b(\w)/g).reverse().join('').slice(0,19).toUpperCase();

        // hide all for unclunky page rendering
        thisAcrosticEl.find('.acrostic-wrapper').hide();

        // Fade in puzzle when done filling page
        authorDone = $.Deferred();
        gridDone   = $.Deferred();
        solverDone = $.Deferred();
        cluesDone  = $.Deferred();

        $.when(authorDone, gridDone, solverDone, cluesDone).done(function () {
            loadCookie();
            addGameplay();
            thisAcrosticEl.find('.acrostic-wrapper').fadeIn();
        });
        organizeData(data);
    }

    function organizeData(acrostic) {
        squares = {};
        gridSquares = [];
        authorSquares = [];
        cluesSquares = [];

        quote = acrostic.quote;

        // create square arrays
        let ordinalCounter = 65; // charCode for 'A'

        $.each(acrostic.clues, function (i, clue) {
            let thisOrdinal = String.fromCharCode(ordinalCounter + i);
            let thisClue = clue.clue;
            $.each(clue.answer, function (j, position) {
                let thisPosition = position;
                let thisLetter = quote[position];
                let thisNumber = quote.substring(0,position).replace(/[^a-zA-Z]/g,'').length + 1;
                squares[position] = {
                    ordinal: thisOrdinal,
                    clue: thisClue,
                    letter: thisLetter,
                    number: thisNumber,
                    position: thisPosition,
                    ordinalN: j
                };
                cluesSquares.push(thisPosition);
                if (!j) {
                    authorSquares.push(thisPosition);
                }
            });
        });

        for ( let i = 0; i < quote.length; i++) {
            gridSquares[i] = i;
        }

        renderAcrostic(acrostic);

    }

    function renderAcrostic(acrostic) {

        // clear all event listeners, hide section containers, empty sections
        thisAcrosticEl.find('#mfa-main').find('*').off();
        thisAcrosticEl.find('.acrostic-wrapper').hide();
        thisAcrosticEl.find('.mfa-section').html('');

        // Page housekeeping
        // Various page details
        thisAcrosticEl.find('.mfa-acrostic-title').text(acrostic.title);
        thisAcrosticEl.find('.mfa-friendly-quote').text(acrostic.friendlyquote);
        thisAcrosticEl.find('.mfa-friendly-author').text(acrostic.friendlyauthor);
        thisAcrosticEl.find('.mfa-acrostic-byline').text(
            (acrostic.constructor ? 'by ' + acrostic.constructor + ' ' : '') +
            (acrostic.publishDate ? '(' + acrostic.publishDate + ')' : '')
        );
        thisAcrosticEl.find('.mfa-copyright-year').text(new Date().getFullYear());
        thisMagicField.data('mfaCookieName', cookieName);

        makeSection('author', authorSquares, authorDone);
        makeSection('grid', gridSquares, gridDone);
        makeSection('solver', cluesSquares, solverDone, 1);
        makeSection('clues', cluesSquares, cluesDone, 1);
        applyLayoutSettings();
        padGrid();
        makeSettingsModal();
        resetGameStatus(1);
        spinnerFade();
        //end renderAcrostic()
    }

    function applyLayoutSettings() {
        if (maxCols) {
            let maxInnerWidthPx = (maxCols * 2 * defaultEm) + maxCols + 2;
            thisAcrosticEl.find('#mfa-grid .mfa-section, #mfa-author .mfa-section').css('max-width', maxInnerWidthPx + 'px' );
        }
        if (minWidth) {
            thisAcrosticEl.css('min-width', minWidth + 'px');
        }
        if (maxWidth) {
            thisAcrosticEl.css('max-width', maxWidth + 'px');
        } else {
            thisAcrosticEl.css('max-width', '100%');
        }
        if (hideHeader) {
            $('.mfa-cover').css('display', 'none');
        }
        if (colorScheme) {
            changeColorSet(colorScheme, false, true);
        }
    }

    function spinnerFade() {
        thisAcrosticEl.find("#mfa-loading-spinner").fadeOut(function(){
            thisAcrosticEl.find(".mfa-puzzle-wrapper").css("opacity",1);
        });
    }

    function addGameplay() {
        // combo key (ctl, alt, option, command, windows)
        let comboKeyDown = false;
        let shiftKeyUp = 1;

        thisMagicField.on('focus', function() {
            if (!thisAcrosticEl.find('.mfa-focused').length) {
                resetGameStatus();
            }
        }).on('keyup', function(e) {
            // combo key up
            if (~[17,18,91,92,93,219,220,224].indexOf(e.keyCode)) {
                comboKeyDown = false;
            }
            else if (e.keyCode === 16) {
                shiftKeyUp = 1;
            }
        }).on('keydown', function(e) {

            thisAcrosticEl.find('.mfa-hover').removeClass('mfa-hover');

            // combo key down
            if (~[17,18,91,92,93,219,220,224].indexOf(e.keyCode)) {
                comboKeyDown = true;
            }
            if (e.keyCode === 16) {
                shiftKeyUp = -1;
            }

            if (!comboKeyDown) {
                e.stopPropagation();
                e.preventDefault();

                let thisInput = String.fromCharCode(e.which);

                let moveFrom = thisAcrosticEl.find('.mfa-focused');

                // letter entered
                if (thisInput.match(/[a-zA-Z]/)) {
                    if (!moveFrom.hasClass('mfa-lock')) {
                        thisAcrosticEl.find('.mfa-active .mfa-input').text(String.fromCharCode(e.which));
                        thisAcrosticEl.find('.mfa-active').removeClass('mfa-error mfa-incorrect mfa-correct');
                        checkForErrors(thisAcrosticEl.find('.mfa-active:first'), 1);
                    }
                    moveFocus(moveFrom, 'letter', 1);
                    updateCookie();
                }
                // tab key
                else if (e.keyCode === 9) {
                    console.log('tab')
                    moveFocus(moveFrom, 'section', shiftKeyUp);
                }
                // enter or return
                else if (e.keyCode === 13) {
                    moveFocus(moveFrom, 'word', shiftKeyUp);
                }
                // backspace or delete
                else if (e.keyCode === 8 || e.keyCode === 46) {
                    if (!moveFrom.hasClass('mfa-lock')) {
                        thisAcrosticEl.find('.mfa-active .mfa-input').text('');
                        thisAcrosticEl.find('.mfa-active').removeClass('mfa-error mfa-incorrect mfa-correct');
                        checkForErrors(thisAcrosticEl.find('.mfa-active:first'), 1);
                    }
                    moveFocus(moveFrom, 'letter', -1);
                    updateCookie();
                }
                // left arrow
                else if (e.keyCode === 37) {
                    moveFocus(moveFrom, 'letter', -1);
                }
                // up arrow
                else if (e.keyCode === 38) {
                    if (moveFrom.hasClass('mfa-grid')) {
                        moveFocus(moveFrom, 'row', -1);
                    }
                    else if (moveFrom.is('.mfa-clues, .mfa-solver')) {
                        moveFocus(moveFrom, 'word', -1);
                    }
                    else {
                        moveFocus(moveFrom, 'letter', -1);
                    }
                }
                // right arrow
                else if (e.keyCode === 39) {
                    moveFocus(moveFrom, 'letter', 1);
                }
                // down arrow
                else if (e.keyCode === 40) {
                    if (moveFrom.hasClass('mfa-grid')) {
                        moveFocus(moveFrom, 'row', 1);
                    }
                    else if (moveFrom.is('.mfa-clues, .mfa-solver')) {
                        moveFocus(moveFrom, 'word', 1);
                    }
                    else {
                        moveFocus(moveFrom, 'letter', 1);
                    }
                }
            }
        });

        thisAcrosticEl.find('.mfa-square').on('click touchend', function() {
            comboKeyDown = false;
            changeActive($(this));
        }).on('mouseenter', function() {
            hoverHighlight($(this), 1);
        }).on('mouseleave', function() {
            hoverHighlight($(this));
        });

        // attempting to work around touch vs. mouse - tbd if this worked
        let dropdowns = thisAcrosticEl.find('.mfa-dropdown');
        let dropdownItems = dropdowns.find('.mfa-dropdown-item');

        dropdowns.on('mouseenter', function (e) {
            e.stopPropagation();
            dropdowns.removeClass('mfa-open');
            $(this).toggleClass('mfa-open');
            scrollIntoView($(this));
        }).on('mouseleave', function () {
            dropdowns.removeClass('mfa-open');
        }).on('click', function (e) {
            e.stopPropagation();
            $(this).toggleClass('mfa-open');
            scrollIntoView($(this));
        });
        dropdownItems.on('click', function () {
            dropdowns.removeClass('mfa-open');
        });

        // header modal buttons
        thisAcrosticEl.find('.mfa-modal-close').on('click', function(e) {
            e.stopPropagation();
            if ($(e.target).hasClass('mfa-modal-close')) {
                mfaModalClose();
            }
        });
        thisAcrosticEl.find('#mfa-puzzle-save').on('click', function(e) {
            e.stopPropagation();
            updateCookie();
        });
        thisAcrosticEl.find('#mfa-nav-check-auto').on('click', function(e) {
            e.stopPropagation();
            thisAcrosticEl.find('.mfa-puzzle-wrapper').toggleClass('mfa-auto-check');
        });
        thisAcrosticEl.find('#mfa-nav-check-letter').on('click', function(e) {
            e.stopPropagation();
            checkForErrors( thisAcrosticEl.find('.mfa-active'),0,1);
        });
        thisAcrosticEl.find('#mfa-nav-check-word').on('click', function(e) {
            e.stopPropagation();
            checkForErrors( thisAcrosticEl.find('.mfa-active-word'),0,1);
        });
        thisAcrosticEl.find('#mfa-nav-check-puzzle').on('click', function(e) {
            e.stopPropagation();
            checkForErrors(thisAcrosticEl.find('.mfa-grid'),0,1);
        });
        thisAcrosticEl.find('#mfa-nav-show-letter').on('click', function(e) {
            e.stopPropagation();
            showAnswers($('.mfa-active'));
        });
        thisAcrosticEl.find('#mfa-nav-show-word').on('click', function(e) {
            e.stopPropagation();
            showAnswers(thisAcrosticEl.find('.mfa-active-word'));

        });
        thisAcrosticEl.find('#mfa-nav-show-puzzle').on('click', function(e) {
            e.stopPropagation();
            confirmDialog('show', 'puzzle');
        });
        thisAcrosticEl.find('#mfa-nav-clear').on('click', function(e) {
            e.stopPropagation();
            confirmDialog('clear');
        });
        thisAcrosticEl.find('#mfa-nav-settings').on('click', function(e) {
            e.stopPropagation();
            changeColorSet(false,1);
            thisAcrosticEl.find('#mfa-settingsModal').mfaModal();
        });
        thisAcrosticEl.find('#mfa-puzzle-help').on('click', function(e) {
            e.stopPropagation();
            $('#mfa-helpModal').mfaModal();
        });

        // always return focus to game when closing modals
        thisAcrosticEl.find('.mfa-modal button').on('click', function (e) {
            e.stopPropagation();
            goHome();
        });

        // solver buttons
        thisAcrosticEl.find('#mfa-solver-next').on('click', function(e) {
            e.stopPropagation();
            scrollSolver(1);
        });
        thisAcrosticEl.find('#mfa-solver-prev').on('click', function(e) {
            e.stopPropagation();
            scrollSolver(-1);
        });

        // window
        $( window ).on('resize', function() {
            padGrid();
        });

    }

    // ********************************************************************************
    //                            gameplay functions
    // ********************************************************************************

    function changeActive(newFocused) {
        let thisPosition = newFocused.data('position');
        let thisOrdinal = newFocused.data('ordinal');
        let samePosition = thisAcrosticEl.find('.mfa-square[data-position="' + thisPosition + '"]');

        thisAcrosticEl.find('.mfa-active, .mfa-focused').removeClass('mfa-active mfa-focused');
        newFocused.addClass('mfa-focused');

        samePosition.addClass('mfa-active');
        showSolver(thisOrdinal);
        highlightWord(newFocused);
        goHome();
    }

    function highlightWord(newFocused) {
        let thisSectionword = newFocused.data('sectionword');

        thisAcrosticEl.find('.mfa-active-word').removeClass('mfa-active-word');
        let selectedWordDivs = newFocused.closest('.mfa-section')
            .find('.mfa-square[data-sectionword="' + thisSectionword + '"]');
        selectedWordDivs.addClass('mfa-active-word');
    }

    function hoverHighlight(newFocused, on) {
        let thisPosition = newFocused.data('position');
        let thisOrdinal = newFocused.data('ordinal');
        let samePosition = thisAcrosticEl.find('.mfa-square[data-position="' + thisPosition + '"]');

        if (on) {
            samePosition.addClass('mfa-hover');
            showSolver(thisOrdinal);
        }
        else {
            samePosition.removeClass('mfa-hover');
            showSolver(thisAcrosticEl.find('.mfa-focused').data('ordinal'));
        }
    }

    function moveFocus(moveFrom, unit, direction) {
        let moveFromSection = moveFrom.closest('.mfa-section-outer');
        let moveFromPosition = moveFrom.data('position');
        let moveFromIndex = moveFromSection.find('.mfa-square').index(moveFrom);
        let moveTo ={};

        if (unit === "letter") {
            let moveToLetterIndex = (moveFromIndex + direction) % moveFromSection.find('.mfa-square').length;
            moveTo = moveFromSection.find('.mfa-square').eq(moveToLetterIndex);
        }
        else if (unit === "row") {
            let allMoveFromCol = thisAcrosticEl.find('.mfa-grid').filter(function () {
                return $(this).data('position') % colCount === moveFromPosition % colCount;
            });
            let moveFromRowIndex = $(allMoveFromCol).index(moveFrom);
            moveTo = allMoveFromCol.eq((moveFromRowIndex + direction) % allMoveFromCol.length);
        }
        else if (unit === "word") {
            let allWords = [];
            $.each($(moveFromSection).find('.mfa-square:not(mfa-black)'), function () {
                allWords[$(this).data('sectionword')] = $(this).data('sectionword');
            });
            let moveFromWordIndex = allWords.indexOf(moveFrom.data('sectionword'));
            let moveToWordIndex = allWords[(moveFromWordIndex + allWords.length + direction) % allWords.length];
            let moveToWord = moveFromSection.find('.mfa-square[data-sectionword="' + moveToWordIndex + '"]');
            if (moveFrom.hasClass('mfa-clues')) {
                let moveFromWordNthIndex = moveFrom.parent().children('.mfa-clues').index(moveFrom);
                let moveToWordNth = moveFromSection.find('.mfa-square[data-sectionword="' +
                    moveToWordIndex + '"]').eq(moveFromWordNthIndex);
                moveTo = moveToWordNth.length ? moveToWordNth : moveToWord.last();

            }
            else {
                moveTo = moveToWord.first();
            }
        }
        else if (unit === "section") {
            let allSections = thisAcrosticEl.find('#mfa-main .mfa-section-outer');
            let moveFromSectionIndex = moveFromSection.closest('.mfa-section-outer').index();
            function moveToSection(direction) {
                return  allSections.eq((moveFromSectionIndex + direction) % allSections.length)
                    .find('.mfa-square[data-position="' + moveFromPosition + '"]');
            }
            moveTo = moveToSection(direction).length ? moveToSection(direction) : moveToSection(direction*2);
        }
        changeActive(moveTo);
    }

    function getColCount(section) {
        let squares = $(section).find('.mfa-square, .mfa-black');
        let baseOffset = (squares.eq(0).offset()).top;
        let breakIndex = 0;
        squares.each(function() {
            if ( ($(this).offset()).top > baseOffset) {
                breakIndex = $(this).index();
                return false;
            }
        });
        return ( breakIndex === -1 ? squares.length : breakIndex );
    }

    function padGrid() {
        $.each(['grid', 'author'], function (i, name) {
            let showClass = (showGridPad !== name && showGridPad !== 'all') ? ' mfa-grid-padding-hide' : '';
            let section = thisAcrosticEl.find('#mfa-' + name);
            let thisColCount = getColCount(section);
            colCount = thisColCount > 0 ? thisColCount : colCount;
            let squares = $(section).find('.mfa-square, .mfa-black');
            let sourceLn = name === 'author' ? authorSquares.length : acrostic['quote'].length;
            let numRows = Math.ceil(sourceLn / thisColCount);
            let gridLn = numRows > 1 ? thisColCount * numRows : sourceLn;
            let fillerCount = gridLn - $(squares).length;
            if (fillerCount < 0) {
                $(squares).slice(gridLn).remove();
            } else if (fillerCount > 0) {
                for (let i = fillerCount; i > 0; i--) {
                    $(squares).last().after('<div class="mfa-black mfa-grid-padding' + showClass + '"> </div>');
                }
            }
        });
    }

    function showSolver(gridletter) {
        let solverRow = thisAcrosticEl.find('#mfa-solver');
        let allWordsDivs = solverRow.find('.mfa-word');
        let selectedWordDiv = solverRow.find('.mfa-word[data-ordinal="' + gridletter + '"]');
        allWordsDivs.css('display','none');
        selectedWordDiv.css('display','inline-block');
    }

    function scrollSolver(dir) {
        let oldSolver = thisAcrosticEl.find('#mfa-solver .mfa-word:visible .mfa-solver:first');
        moveFocus(oldSolver, 'word', dir);
    }

    function resetGameStatus(justLoaded) {
        thisAcrosticEl.find('.mfa-active, .mfa-active-word, .mfa-hover, .mfa-error, .mfa-correct, .mfa-incorrect').removeClass('mfa-active mfa-active-word mfa-hover mfa-error mfa-correct mfa-incorrect');
        checkForErrors(thisAcrosticEl.find('.mfa-grid'), 1);

        let firstSolverSquare = thisAcrosticEl.find('#mfa-grid .mfa-square:first');
        if (!disableAutoFocus) {
            changeActive(firstSolverSquare);
        }
        if (justLoaded) {
            thisMagicField.data('errorsShown','0');
            thisMagicField.data('successShown','0');
        }
    }
    function goHome() {
        let focused = thisAcrosticEl.find(".mfa-focused");
        if (focused) {
            thisMagicField.appendTo(focused).css({
                position: "absolute",
                left: "50%",
                top: "50%"
            });
        }
        thisMagicField.val('').trigger('focus');
    }


    // ********************************************************************************
    //                             button functions
    // ********************************************************************************

    $.fn.mfaModal = function () {
        thisAcrosticEl.find('.mfa-dropdown').removeClass('mfa-open');
        let templates = thisAcrosticEl.find('#mfaModalTemplates');
        let thisModal = this;
        if (templates.hasClass('mfa-show')) {
            templates.fadeOut(250, function() {
                templates.removeClass('mfa-show');
                templates.find('.mfa-show').removeClass('mfa-show');
                mfaModalOpen(thisModal, templates);
            });
        } else {
            templates.find('.mfa-show').removeClass('mfa-show');
            mfaModalOpen(thisModal, templates);
        }
    }

    function mfaModalOpen(thisModal, templates) {
        if (thisModal.hasClass('mfa-modal')) {
            thisModal.addClass('mfa-show');
            templates.addClass('mfa-show');
            templates.fadeIn(250);
            scrollIntoView(thisModal);
        }
    }
    function mfaModalClose() {
        thisAcrosticEl.find('#mfa-confirm-proceed').off();
        let templates = thisAcrosticEl.find('#mfaModalTemplates');
        templates.fadeOut(250, function() {
            templates.removeClass('mfa-show');
            templates.children().removeClass('mfa-show');
        });
        scrollIntoView($('.mfa-focused'));
    }

    function scrollIntoView(el) {
        if (el.length) {
            let topDiff = $(el).offset().top - $(window).scrollTop();
            let bottomDiff = ($(el).offset().top + $(el).outerHeight()) - ($(window).scrollTop() + $(window).height());

            if (topDiff < 0) {
                console.log("top < 0");
                $('html, body').animate({
                    scrollTop: $(el).offset().top + topDiff
                });
            } else if (bottomDiff > 0) {
                console.log("botDiff > 0");
                $('html, body').animate({
                    scrollTop: $(el).offset().top
                });
            }
        }
    }

    function clearPuzzle() {
        mfaModalClose();
        updateCookie("remove");
        thisAcrosticEl.find('.mfa-error, .mfa-cheater').removeClass('mfa-error mfa-cheater');
        thisAcrosticEl.find('.mfa-input').text('');
        checkForErrors(thisAcrosticEl.find('.mfa-grid'), 1);
    }

    function checkForErrors(thisArray, checkOnly, notifyNoError) {
        thisArray.each(function() {
            checkThisLetter(this,checkOnly);
        });
        let allCount = thisAcrosticEl.find('.mfa-grid').length;
        let errorCount = thisAcrosticEl.find('.mfa-grid.mfa-incorrect').length;
        let correctCount = thisAcrosticEl.find('.mfa-grid.mfa-correct').length;
        let answerCount = errorCount + correctCount;

        if (allCount === correctCount && thisMagicField.data('successShown') === '0') {
            thisAcrosticEl.find('#mfa-finishedModal').mfaModal();
            thisMagicField.data('successShown', '1');
            thisMagicField.data('errorsShown', '1');
        }
        else if (allCount === answerCount && thisMagicField.data('errorsShown') === '0') {
            thisAcrosticEl.find('#mfa-stillErrorsModal').mfaModal();
            thisMagicField.data('errorsShown', '1');
            thisMagicField.data('successShown', '0');
        }
        else if (!errorCount && notifyNoError) {
            thisAcrosticEl.find('#mfa-noErrorModal').mfaModal();
        } else {
            mfaModalClose();
        }
    }

    function checkThisLetter(thisInput, checkOnly) {
        let allThisLetter = thisAcrosticEl.find('[data-position="' + $(thisInput).data('position') + '"]');
        let thisInputText = $(thisInput).find('.mfa-input').text();
        if ( thisInputText === $(thisInput).data('letter') ) {
            allThisLetter.removeClass('mfa-incorrect mfa-error').addClass('mfa-correct');
        }
        else if ( thisInputText !== $(thisInput).data('letter') && thisInputText !== '' ) {
            allThisLetter.removeClass('mfa-correct').addClass('mfa-incorrect');
            allThisLetter.addClass(function() {
                if (!checkOnly) {
                    return 'mfa-error mfa-cheater';
                }
            });
        }
        else {
            allThisLetter.removeClass('mfa-correct mfa-incorrect mfa-error');
        }
    }

    function showAnswers(thisArray) {
        mfaModalClose();
        thisArray.removeClass('mfa-error mfa-incorrect').addClass('mfa-correct mfa-lock');
        thisArray.each(function() {
            if ($(this).find('.mfa-input').text() !== $(this).data('letter')) {
                $('.mfa-square[data-position="' + $(this).data('position') + '"]').addClass('mfa-cheater mfa-lock').find('.mfa-input')
                    .text($(this).data('letter'));
            }
        });
        checkForErrors(thisArray, 1);
        updateCookie();
    }

    function confirmDialog(action, arg) {
        let confirmModal = thisAcrosticEl.find('#mfa-confirmationModal');
        let confirmTitle = confirmModal.find('#mfa-confirm-title');
        let confirmText = confirmModal.find('#mfa-confirm-text');
        if (action === 'clear') {
            confirmTitle.html('Clear Puzzle');
            confirmText.html('clear the entire puzzle');
            thisAcrosticEl.find('#mfa-confirm-proceed').on('click', function(e) {
                e.stopPropagation();
                clearPuzzle();
            });
            confirmModal.mfaModal();
        }
        else if (action === 'show') {
            let answerTypeText = "this " + arg;
            if (arg === 'letter') {
                thisAcrosticEl.find('#mfa-confirm-proceed').on('click', function(e) {
                    e.stopPropagation();
                    showAnswers($('.mfa-active'));
                });
            }
            else if (arg === 'word') {
                if ( thisAcrosticEl.find('.mfa-focused.mfa-author').length ) {
                    answerTypeText = "the entire quote author and title";
                } else if ( thisAcrosticEl.find('.mfa-focused.mfa-grid').length ) {
                    answerTypeText = "this word in the quote grid";
                }
                thisAcrosticEl.find('#mfa-confirm-proceed').on('click', function(e) {
                    e.stopPropagation();
                    showAnswers(thisAcrosticEl.find('.mfa-active-word'));
                });
            }
            else if (arg === 'puzzle') {
                answerTypeText = "the entire solution";
                thisAcrosticEl.find('#mfa-confirm-proceed').on('click', function(e) {
                    e.stopPropagation();
                    showAnswers(thisAcrosticEl.find('.mfa-square'));
                });
            }
            confirmTitle.html('Reveal Answers');
            confirmText.html('reveal ' + answerTypeText);
            confirmModal.mfaModal();
        }
    }

    // ********************************************************************************
    //                           page building functions
    // ********************************************************************************

    // html, section by section
    function makeSection(thisSection, thisArray, thisResolve, clueWrap, columnize) {
        wordCounter = 0;
        thisAcrosticEl.find('#mfa-' + thisSection + ' .mfa-section').html(function () {
            let thisHtml = '';
            for (let i = 0; i < thisArray.length; i++) {
                thisHtml += buildSquare(thisArray[i], thisSection, clueWrap);
            }
            return thisHtml;
        });
        if (columnize) { makeColumns(thisSection, columnize) }
        thisResolve.resolve('#mfa-' + thisSection);
    }

    function makeColumns(thisSection, numCols) {
        let thisSectionDiv = thisAcrosticEl.find('#mfa-' + thisSection + ' .mfa-section');
        let thisClueCount = thisSectionDiv.children('.mfa-word').length;
        let perCol = Math.floor(thisClueCount / numCols);
        let perColExtra = thisClueCount % numCols;
        for (let i=0; i < numCols; i++) {
            let unwrappedClues = thisSectionDiv.children('.mfa-word').length;
            let endOfWrap = perCol + (perColExtra > 0 ? 1 : 0);
            endOfWrap = Math.min(endOfWrap, unwrappedClues);
            $(thisSectionDiv).children('.mfa-word').slice(0,endOfWrap).wrapAll('<div class="mfa-column">');
            perColExtra--;
        }
        thisSectionDiv.find('.mfa-column').css('width', Math.floor(100/numCols) + '%')
    }

    function buildSquare(i, thisSection, clueWrap) {
        let thisHtml = '';
        let thisSquare = squares[i];
        let prevOrdinal = squares[cluesSquares[cluesSquares.indexOf(i)-1]] ?
            squares[cluesSquares[cluesSquares.indexOf(i)-1]].ordinal : '';
        let nextOrdinal = squares[cluesSquares[cluesSquares.indexOf(i)+1]] ?
            squares[cluesSquares[cluesSquares.indexOf(i)+1]].ordinal : '';
        if (thisSquare) {
            if (clueWrap && thisSquare.ordinal !== prevOrdinal) {
                thisHtml += '<div class="mfa-word" data-ordinal="' + thisSquare.ordinal + '">' +
                    '<div class="mfa-clue">' +
                    '<div class="mfa-ordinal">' + thisSquare.ordinal + '</div>' +
                    thisSquare.clue +
                    '</div>';
            }
            thisHtml += '<div class="mfa-' + thisSection + ' mfa-square" ' +
                'data-position="' + thisSquare.position + '" ' +
                'data-number="' + thisSquare.number + '" ' +
                'data-ordinal="' + thisSquare.ordinal + '" ' +
                'data-sectionword="' + wordCounter + '" ' +
                'data-letter="' + thisSquare.letter  + '">' +
                '<div class="mfa-input"></div>' +
                '<div class="mfa-number">' + thisSquare.number + '</div>' +
                '<div class="mfa-ordinal">' + thisSquare.ordinal + '</div>' +
                '</div>';
            if (clueWrap && thisSquare.ordinal !== nextOrdinal) {
                thisHtml += '</div>';
                wordCounter++;
            }
        }
        else {
            thisHtml += '<div class="mfa-black">' + quote[i] + '</div>';
            wordCounter++;
        }
        return thisHtml;
    }


    // ********************************************************************************
    //                              settings functions
    // ********************************************************************************

    function changeColorSet(colorClassName, demoMode, setDefault) {

        let mfPrefs = {};
        if (!disableStorage) {
            try {
                mfPrefs = JSON.parse(localStorage.getItem(cookieName));
            } catch {
                mfPrefs = {};
            }
        }
        let mfAcrosticPrefs = mfPrefs && mfPrefs['acrostic'] ? mfPrefs['acrostic'] : {};

        thisAcrosticEl.find('.mfa-chip-btn').removeClass('mfa-color-saved');
        thisAcrosticEl.find('.' + mfAcrosticPrefs.colorSet).addClass('mfa-color-saved');

        if (!colorClassName) {
            colorClassName = mfAcrosticPrefs.colorSet || mfaColorSets[0];
        } else if (setDefault && mfAcrosticPrefs.colorSet) {
            colorClassName = mfAcrosticPrefs.colorSet;
        }
        thisAcrosticEl.find('#mfa-color-demo').removeClass().addClass(colorClassName);

        if (!demoMode) {
            $.each(mfaColorSets, function() {
                let colorClassName = this.toString();
                thisAcrosticEl.find('#mfa-main').removeClass(colorClassName);
            });
            thisAcrosticEl.find('#mfa-main').addClass(colorClassName);

            updateSettings("acrostic", {"colorSet": colorClassName });
        }
    }

    function updateSettings(type, data) {
        if (disableStorage) {
            return true;
        }
        // expects data {name1: value1, ...}
        let savedSettings = localStorage.getItem( cookieName ) || {};
        try {
            savedSettings = JSON.parse(savedSettings);
        } catch {
            savedSettings = {};
        }
        if (type) {
            savedSettings[type] = savedSettings[type] || {};
            Object.keys( data ).forEach( function (k) {
                if (data[k] === null) {
                    delete savedSettings[type][k];
                } else {
                    savedSettings[type][k] = data[k];
                }
            });
            localStorage.setItem( cookieName, JSON.stringify(savedSettings));
        }
    }

    function makeSettingsModal() {
        let optionsDiv = thisAcrosticEl.find('#mfa-color-options');
        optionsDiv.html();
        $.each(mfaColorSets, function() {
            let colorClassName = this.toString();
            optionsDiv.append(thisAcrosticEl.find('#mfa-color-options-template').html());
            optionsDiv.children('.mfa-chip-btn:last').addClass(colorClassName);
            optionsDiv.children('.mfa-chip-btn:last').find('.mfa-color-name:last').html(colorClassName.replace('mfa-colors-',''))
            optionsDiv.children('.mfa-chip-btn:last').on('click', function(e) {
                e.stopPropagation();
                thisAcrosticEl.find('#mfa-btn-save-settings').off().on('click', function(e) {
                    e.stopPropagation();
                    changeColorSet( colorClassName );
                    mfaModalClose();
                });
                changeColorSet(colorClassName, 1);
            });
        });
        changeColorSet();
    }



    // ********************************************************************************
    //                              storage functions
    // ********************************************************************************

    function updateCookie(action) {

        if (disableStorage) {
            return true;
        }

        let allInputs = thisAcrosticEl.find('#mfa-grid .mfa-input');

        let newCookieValue = "";
        allInputs.each( function () {
            let thisInput = $(this);
            let thisValue = '-';
            if (thisInput.text().length > 0) {
                thisValue = (thisInput.parent().hasClass('mfa-cheater')) ? thisInput.text().toLowerCase() : thisInput.text().toUpperCase();
            }
            newCookieValue += thisValue;
        });

        // COOKIE
        let savesCookie = localStorage.getItem(cookieName) || {};
        savesCookie = JSON.parse(savesCookie);
        if ( !("s" in savesCookie) ) {
            savesCookie.s = [];
        }

        let newSaveArray = savesCookie.s.filter(function(obj) {
            return obj.f !== acrostic.saveKey;
        });

        if (action !== "remove") {
            newSaveArray.unshift({
                "f" : acrostic.saveKey,
                "p" : newCookieValue
            });
        }

        savesCookie.s = newSaveArray.splice(0,10);

        localStorage.setItem( cookieName, JSON.stringify(savesCookie));

    }

    function loadCookie() {
        if (disableStorage) {
            return true;
        }

        let savedGame = false;
        let allInputs = thisAcrosticEl.find('#mfa-grid .mfa-input');

        let savesCookie = localStorage.getItem(cookieName) || {};
        try {
            savesCookie = JSON.parse(savesCookie);
        } catch {
            savesCookie = {};
        }
        if ( !("s" in savesCookie) ) {
            savesCookie.s = [];
        }

        let foundSave = savesCookie.s.filter(function(obj) {
            return obj.f === acrostic.saveKey;
        });

        if ( foundSave.length === 1 && "p" in foundSave[0] && foundSave[0].p.length === allInputs.length ) {
            savedGame = foundSave[0].p;
        }

        if ( savedGame && savedGame.length === allInputs.length ) {

            for (let i=0; i < savedGame.length; i++) {
                if (savedGame[i] !== '-') {
                    let thisInput = thisAcrosticEl.find('.mfa-square[data-number="' + (i + 1) + '"] .mfa-input');
                    thisInput.text(savedGame[i].toUpperCase());
                    if (savedGame[i] !== savedGame[i].toUpperCase()) {
                        thisInput.parent().addClass('mfa-cheater');
                        if (savedGame[i].toUpperCase() === thisInput.parent().data('letter')) {
                            thisInput.parent().addClass('mfa-lock');
                        }
                    }
                }
            }
        }
        checkForErrors(thisAcrosticEl.find('.mfa-grid'),1);
    }
}

