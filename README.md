# smartUtilities
Utility classes 



| Rules                                                        |                               | Example code    | Full names                                        |
|--------------------------------------------------------------|-------------------------------|-----------------|---------------------------------------------------|
| Property and property values separate with hyphen            |                               | .mb-20          | margin-bottom:20px                                |
| First letter of all words                                    |                               | .p-r            | position-relative                                 |
| If multiple same words in values                             |                               | .ai-fs , .ai-fe | align-items: flex-start; , align-items: flex-end; |
| Responsive case separated with hyphens                       |                               | .ai-c-sm        | align-items: center;                              |
| Two letters after hyphen - to avoid same value name conflict |                               | .bs-cn, .bs-cr  | background-size:contain; , background-size:cover; |
|                                                              |                               |                 |                                                   |
|                                                              |                               |                 |                                                   |
| Align                                                        |                               |                 |                                                   |
| .ai-c                                                        | align-items: center;          |                 |                                                   |
| .ai-fs                                                       | align-items: flex-start;      |                 |                                                   |
| .ai-fe                                                       | align-items: flex-end;        |                 |                                                   |
| .ai-c-#{breakpoint}                                          | sm, md, lg                    |                 |                                                   |
|                                                              |                               |                 |                                                   |
| Background                                                   |                               |                 |                                                   |
| .b-n                                                         | background:none;              |                 |                                                   |
| .bs-cn                                                       | background-size:contain;      |                 |                                                   |
| .bs-cr                                                       | background-size:cover;        |                 |                                                   |
| .bs-f                                                        | background-size:fixed;        |                 |                                                   |
| .bs-a                                                        | background-size:auto;         |                 |                                                   |
| .b-n-#{$breakpoint}                                          | sm, md, lg                    |                 |                                                   |
|                                                              |                               |                 |                                                   |
| Border                                                       |                               |                 |                                                   |
| .b                                                           |                               |                 |                                                   |
| .bt                                                          |                               |                 |                                                   |
| .br                                                          |                               |                 |                                                   |
| .bl                                                          |                               |                 |                                                   |
| .bb                                                          |                               |                 |                                                   |
| No Responsive here now                                       |                               |                 |                                                   |
|                                                              |                               |                 |                                                   |
| Display                                                      |                               |                 |                                                   |
| .d-n                                                         | display:none;                 |                 |                                                   |
| .d-b                                                         | display:block;                |                 |                                                   |
| .d-ib                                                        | display:inline-block;         |                 |                                                   |
| .d-i                                                         | display:inline;               |                 |                                                   |
| .d-f                                                         | display:flex;                 |                 |                                                   |
| .d-if                                                        | display:inline-flex;          |                 |                                                   |
| .d-n-#{$breakpoint}                                          |                               |                 |                                                   |
|                                                              |                               |                 |                                                   |
| Flex                                                         |                               |                 |                                                   |
| .fw-w                                                        | flex-wrap: wrap;              |                 |                                                   |
| .fw-n                                                        | flex-wrap: nowrap;            |                 |                                                   |
| .fd-c                                                        | flex-direction: column;       |                 |                                                   |
| .fd-r                                                        | flex-direction: row;          |                 |                                                   |
| .fw-w-#{$breakpoint}                                         |                               |                 |                                                   |
|                                                              |                               |                 |                                                   |
| Float                                                        |                               |                 |                                                   |
| .f-n                                                         | float: none;                  |                 |                                                   |
| .f-l                                                         | float: left;                  |                 |                                                   |
| .f-r                                                         | float: right;                 |                 |                                                   |
| .f-n-#{$breakpoint}                                          |                               |                 |                                                   |
|                                                              |                               |                 |                                                   |
| Font                                                         |                               |                 |                                                   |
| .fw-n                                                        | font-weight:normal;           |                 |                                                   |
| .fw-b                                                        | font-weight:bold;             |                 |                                                   |
| .fw-i                                                        | font-weight:inherit;          |                 |                                                   |
| .fw-#{$fw}                                                   | 100 to 900                    |                 |                                                   |
| .fs-#{$value}                                                | 0 to 30px                     |                 |                                                   |
| .fw-n-#{$breakpoint}                                         |                               |                 |                                                   |
| .fw-#{$fw}-#{$breakpoint}                                    |                               |                 |                                                   |
| .fs-#{$value}-#{$breakpoint}                                 |                               |                 |                                                   |
|                                                              |                               |                 |                                                   |
|                                                              |                               |                 |                                                   |
| Height                                                       |                               |                 |                                                   |
| .ha                                                          | height:auto;                  |                 |                                                   |
| .h-100-percentage                                            | height:100%;                  |                 |                                                   |
| .h-100-vh                                                    | height:100vh;                 |                 |                                                   |
| .mnh-a                                                       | min-height: auto;             |                 |                                                   |
| .mxh-n                                                       | max-height: none;             |                 |                                                   |
| .ha-#{$breakpoint}                                           |                               |                 |                                                   |
|                                                              |                               |                 |                                                   |
| Margin                                                       |                               |                 |                                                   |
| .mt-#{$value}                                                | 0 to 10 (++1), 10 to 40 (++5) |                 |                                                   |
| .mr-#{$value}                                                |                               |                 |                                                   |
| .mb-#{$value}                                                |                               |                 |                                                   |
| .ml-#{$value}                                                |                               |                 |                                                   |
| .mt-#{$value}-#{$breakpoint}                                 | 0 to 10 (++1), 10 to 40 (++5) |                 |                                                   |
|                                                              |                               |                 |                                                   |
| Padding                                                      |                               |                 |                                                   |
| .pt-#{$value}                                                | 0 to 10 (++1), 10 to 40 (++5) |                 |                                                   |
| .pr-#{$value}                                                |                               |                 |                                                   |
| .pb-#{$value}                                                |                               |                 |                                                   |
| .pl-#{$value}                                                |                               |                 |                                                   |
| .pt-#{$value}-#{$breakpoint}                                 | 0 to 10 (++1), 10 to 40 (++5) |                 |                                                   |
|                                                              |                               |                 |                                                   |
| position                                                     |                               |                 |                                                   |
| .p-r                                                         | position:relative;            |                 |                                                   |
| .p-a                                                         | position: absolute;           |                 |                                                   |
| .p-f                                                         | position:fixed;               |                 |                                                   |
| .p-s                                                         | position:static;              |                 |                                                   |
| .pr-#{$breakpoint}                                           |                               |                 |                                                   |
|                                                              |                               |                 |                                                   |
| .t-#{$value}                                                 | 0 to 10(1++) , 10 to 40 (5++) |                 |                                                   |
| .r-#{$value}                                                 |                               |                 |                                                   |
| .b-#{$value}                                                 |                               |                 |                                                   |
| .l-#{$value}                                                 |                               |                 |                                                   |
| .t-#{$value}-#{$breakpoint}                                  |                               |                 |                                                   |
|                                                              |                               |                 |                                                   |
| Text                                                         |                               |                 |                                                   |
| .ta-l                                                        | text-align: left;             |                 |                                                   |
| .ta-c                                                        | text-align: center;           |                 |                                                   |
| .ta-r                                                        | text-align: center;           |                 |                                                   |
| .ta-l-#{$breakpoint}{                                        |                               |                 |                                                   |
|                                                              |                               |                 |                                                   |
| Width                                                        |                               |                 |                                                   |
| .w-a                                                         | width:auto;                   |                 |                                                   |
| .w-100-percentage                                            | width:100%;                   |                 |                                                   |
| .w-100-vw                                                    | width:100vw;                  |                 |                                                   |
| .mnw-a                                                       | min-width: auto;              |                 |                                                   |
| mxw-n                                                        | max-width: none;              |                 |                                                   |
|                                                              |                               |                 |                                                   |
|                                                              |                               |                 |                                                   |
 