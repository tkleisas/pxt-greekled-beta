//% weight=70 icon="\uf044" color=#EC7505
namespace greekled
{
    
    const chars = " " + "!" + '"' + "#$%&'()*+-./:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩabcdefghijklmnopqrstuvwxyzαάβγδεέζηήθιίΐϊκλμνξοόπρσςτυύϋΰφχψωώ"

    const arr: number[] = [
         0, 0, 0, 0, 0,
         0, 0, 23, 0, 0, //!
         0, 7, 0, 7, 0, // "
        10, 31, 10, 31, 10, // #
        14, 23, 21, 29, 10, // $
        19, 9, 4, 18, 25, // %
        10, 21, 21, 10, 16, // &
         0, 0, 3, 0, 0,   // '
        0, 0, 0, 14, 17, // (
        17, 14, 0, 0, 0, // )
        0, 0, 0, 0, 0,
        0, 5, 2, 5, 0, // +
        4, 4, 31, 4, 4, // -
        0, 24, 0, 0, 0, // .
        16, 8, 4, 2, 1, // /
        0, 0, 1, 0, 0, //:
        0, 16, 10, 0, 0, //;
        0, 4, 10, 17, 0, //<
        0, 10, 10, 10, 0, //=
        0, 17, 10, 4, 0, //>
        2, 1, 21, 5, 2, //?
        14, 21, 27, 31, 14, //@
        30, 5, 5, 30, 0,   //A
        31, 21, 21, 10, 0,   //B
        14, 17, 17, 17, 0,   //C
        31, 17, 17, 14, 0,   //D
        31, 21, 21, 17, 0,   //E
        31, 5, 5, 1, 0,   //F
        14, 17, 17, 21, 12,   //G
        31, 4, 4, 31, 0,   //H
        17, 31, 17, 0, 0,   //I
        9, 17, 17, 15, 1,   //J
        31, 4, 10, 17, 0,   //K
        31, 16, 16, 16, 0,   //L
        31, 2, 4, 2, 31,   //M
        31, 2, 4, 8, 31,   //N
        14, 17, 17, 14, 0,   //O
        31, 5, 5, 2, 0,   //P
        6, 9, 25, 22, 0,   //Q
        31, 5, 5, 10, 16,   //R
        18, 21, 21, 9, 0,   //S
        1, 1, 31, 1, 1,   //T
        15, 16, 16, 15, 0,   //U
        7, 8, 16, 8, 7,   //V
        31, 8, 4, 8, 31,   //W
        27, 4, 4, 27, 0,   //X
        1, 2, 28, 2, 1,   //Y
        25, 21, 19, 17, 0,   //Z
        14, 17, 17, 14, 0,   //0
        0, 18, 31, 16, 0,   //1
        25, 21, 21, 18, 0,   //2
        9, 17, 21, 11, 0,   //3
        12, 10, 9, 31, 8,   //4
        23, 21, 21, 21, 9,   //5
        8, 20, 22, 21, 8,   //6
        17, 9, 5, 3, 1,   //7
        10, 21, 21, 21, 10,   //8
        2, 21, 13, 5, 2,   //9
        30, 5, 5, 30, 0,   //Α
        31, 21, 21, 10, 0,   //Β
        31, 1, 1, 1, 0,   //Γ
        30, 17, 17, 30, 0,   //Δ
        31, 21, 21, 17, 0,   //Ε
        25, 21, 19, 17, 0,   //Ζ
        31, 4, 4, 31, 0,   //Η
        14, 21, 21, 14, 0,   //Θ
        17, 31, 17, 0, 0,   //Ι
        31, 4, 10, 17, 0,   //Κ
        30, 1, 1, 30, 0,   //Λ
        31, 2, 4, 2, 31,   //Μ
        31, 2, 4, 8, 31,   //Ν
        21, 21, 21, 21, 0,   //Ξ
        14, 17, 17, 14, 0,   //Ο
        31, 1, 1, 31, 0,   //Π
        31, 5, 5, 2, 0,   //Ρ
        17, 27, 21, 17, 0,   //Σ
        1, 1, 31, 1, 1,   //Τ
        1, 2, 28, 2, 1,   //Υ
        14, 10, 31, 10, 14,   //Φ
        27, 4, 4, 27, 0,   //Χ
        7, 4, 31, 4, 7,   //Ψ
        23, 21, 21, 23, 0,   //Ω
        25, 21, 21, 30, 0,   //a
        31, 18, 18, 12, 0,   //b
        12, 18, 18, 18, 0,   //c
        12, 18, 18, 31, 0,   //d
        14, 21, 21, 22, 0,   //e
        30, 5, 5, 0, 0,      //f
        18, 21, 21, 14, 0,     //g
        31, 4, 4, 24, 0,     //h
        16, 29, 16, 0, 0,     //i
        16, 16, 13, 0, 0,     //j
        31, 8, 8, 20, 0,      //k
        17, 30, 16, 0, 0,         //l
        30, 4, 24, 4, 24,    //m
        28, 4, 4, 24, 0,       //n
        12, 18, 18, 12, 0,      //o
        31, 5, 5, 2, 0,        //p
        2, 5, 5, 31, 0,         //q
        30, 4, 2, 2, 0,          //r
        18, 21, 21, 9, 0,       // s
        2, 2, 15, 18, 18,         // t
        14, 16, 16, 30, 0,         // u
        6, 8, 16, 8, 6,             //v
        14, 16, 14, 16, 14,         //w
        18, 12, 12, 18, 0,              //x
        19, 20, 20, 15, 0,             //y
        18, 26, 22, 18, 0,          //z
        12, 18, 18, 30, 16,          //α
        12, 18, 19, 30, 16,          //ά
        30, 21, 21, 10, 0,          //β
        13, 18, 18, 13, 0,              //γ
        9, 23, 21, 9, 1,             //δ
        0, 10, 21, 21, 17,           //ε
        1, 10, 21, 21, 17,           //έ
        9, 21, 19, 17, 0,            //ζ
        31, 2, 2, 28, 0,            //η
        31, 2, 2, 29, 0,            //ή
        14, 21, 21, 14, 0,          //θ
        0, 0, 14, 16, 0,                //ι
        0, 0, 13, 16, 0,             //ί
        1, 0, 13, 16, 1,             //ΐ
        1, 0, 14, 16, 1,            // ϊ
        28, 8, 8, 20, 0,             // κ
        17, 10, 4, 8, 16,           //λ
        31, 4, 4, 7, 8,             //μ
        4, 8, 16, 8, 4,             //ν
        0, 21, 15, 5, 0,            //ξ
        12, 18, 18, 12, 0,          //ο
        8, 20, 21, 8, 0,            //ό
        30, 2, 2, 30, 0,            //π
        30, 10, 10, 4, 0,           //ρ
        12, 18, 18, 14, 2,          //σ
        2, 5, 21, 9, 0,           //ς
        2, 2, 30, 2, 2,             //τ
        12, 16, 16, 12, 0,          //υ
        12, 16, 17, 12, 0,          //ύ
        12, 17, 16, 13, 0,          //ϋ
        13, 17, 17, 13, 1,          //ΰ
        14, 17, 31, 17, 14,         //φ
        18, 12, 12, 18, 0,              //χ
        3, 4, 31, 4, 3,             //ψ
        14, 16, 14, 16, 14,         //ω
        12, 16, 13, 16, 12,         //ώ


        
    ]

    const num: number[] = [
        31, 31, //0
        0, 31,  //1
        29, 23, //2
        21, 31, //3
        7, 28, //4
        23, 29, //5
        31, 28, //6
        1, 31, // 7
        27, 27, // 8
        7, 31,  // 9

    ]
    function plotColumn(n: number, column: number) {
        for (let i = 0; i < 5; i++) {
            if ((n & (1 << i)) > 0) {
                led.plot(column, i)
            }
            else {
                led.unplot(column, i)
            }
        }

    }    
    
    
    //% blockId=show_strings block="show string %v"
    export function showString(text: string, time: number = 200): void {
        let c0 = 0;
        let c1 = 0;
        let c2 = 0;
        let c3 = 0;
        let c4 = 0;
        let c5 = 0;
        let c = 0;
            
        for (let i = 0; i <= text.length; i++) {

            for (let j = 0; j < 6; j++) {
                c0 = c1;
                c1 = c2;
                c2 = c3;
                c3 = c4;
                c4 = c5;
                if (j == 5) {
                    c5 = 0;
                }
                else {
                    for (c = 0; c < chars.length; c++) {
                        if (text.substr(i, 1).compare(chars.substr(c, 1)) == 0) {
                            c5 = arr[c * 5 + j]
                            break;
                        }
                        c5 = 0;
                    }
                }
                if (text.length == 1)
                {
                    c0 = arr[c * 5];
                    c1 = arr[c * 5 + 1];
                    c2 = arr[c * 5 + 2];
                    c3 = arr[c * 5 + 3];
                    c4 = arr[c * 5 + 4];
                }    
                plotColumn(c4, 4)
                plotColumn(c3, 3)
                plotColumn(c2, 2)
                plotColumn(c1, 1)
                plotColumn(c0, 0)
                if (text.length == 1) {
                    return
                }
                else
                {
                    
                    basic.pause(time)
                }    

            }

        }
    }

    //% blockId=show_number block="show number %v"
    export function showNumber(n: number): void {
        if (n < 0 || n > 999)
        {
            basic.showNumber(n)
            return
        }
        let c2 = n / 100;
        let c1 = (n- c2* 100)/10;
        let offset = 0
        let c0 = n - (c2 * 100 + c1 * 10)
        if (c2 > 0)
        {
            offset = 1
            switch (c2)
            {
                case 1:
                    plotColumn(16, 0)    
                    break
                case 2:
                    plotColumn(8, 0)    
                    break
                case 3:
                    plotColumn(4, 0)    
                    break
                case 4:
                    plotColumn(2, 0)    
                    break
                case 5:
                    plotColumn(1, 0)    
                    break
                case 6:
                    plotColumn(24,0)    
                    break
                case 7:
                    plotColumn(28,0)    
                    break
                case 8:
                    plotColumn(30,0)    
                    break
                case 9:
                    plotColumn(31,0)    
                    break
                default:
                    break    
            }
        }    
        if (c2>0 || c1>0) {
            plotColumn(num[c1 * 2], 0+offset)
            plotColumn(num[c1 * 2 + 1], 1+offset)
        }
        else
        {
            plotColumn(0, 0)
            plotColumn(0, 1)
        } 
        if (offset == 0) {
            plotColumn(0, 2)
        }
        plotColumn(num[c0 * 2], 3)
        plotColumn(num[c0 * 2+1],4)
        
    }

}