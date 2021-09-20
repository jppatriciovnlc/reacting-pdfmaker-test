
export class Print {

    constructor(printData) {
      this.printData = printData;
    }  
  
     handleDocument() {
      const docContent = this.createContent();     
      const document = this.createDoc(docContent);      
      return document;
    }
  
    createContent() {
      const header = [
        { text: 'Item', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        { text: 'Qtd', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        { text: 'Price', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
      ];
      const body = this.printData.map((prod) => {
        return [
          { text: prod.item, fontSize: 8 },
          { text: prod.qtd, fontSize: 8 },
          { text: prod.price, fontSize: 8 },
        ];
      });
  
      const lineHeader = [
        {
          text:
            '__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
          alignment: 'center',
          fontSize: 5,
          colSpan: 3,
        },
        {},
        {},
      ];
  
      let content = [header, lineHeader];
      content = [...content, ...body];
      return content;
    }
  
    createDoc(docContent) {        
      const doc = {
        pageSize: 'A4',
        pageMargins: [14, 53, 14, 48],
        header: function () {
          return {
              margin: [14, 12, 14, 0],
              layout: 'noBorders',
              table: {
                widths: ['*'],
                body: [                             
                  [
                    { text: 'REPORT', style: 'reportName' }
                  ]              
                ],
              },
            };
        },
        content: [
            {
                layout: 'noBorders',
                table: {              
                    headerRows: 1,
                    widths: [ '*', 55, 55 ],
    
                    body: docContent
                }
                },
        ],
        footer(currentPage, pageCount) {
                return {
                layout: 'noBorders',
                margin: [14, 0, 14, 22],
                table: {
                    widths: ['auto'],
                    body: [
                    [
                        {
                        text:
                            '_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
                        alignment: 'center',
                        fontSize: 5,
                        },
                    ],
                    [
                      
                        [
                          {
                            style: 'tableExample',
                            table: {
                              widths: ['*', 'auto'],
                              body: [
                                [{
                                  text: '© Racting Tests Report',
                                  fontSize: 6,
                                  alignment: 'left',
                                  margin: [3, 0],
                              },{
                                text: `Page ${currentPage.toString()} / ${pageCount}`,
                                fontSize: 6,
                                alignment: 'right',   
                            }],
                              ]
                            },
                            layout: 'noBorders'
                          },
                        
                        ],
                    ],
                    ],
                },
                };
            },
        styles: {
            reportName: {
            fontSize: 9,
            bold: true,
            alignment: 'center',
            margin: [0, 4, 0, 0],
            },
            
            
        },
  
    };    
      return doc;
    }
  }
  