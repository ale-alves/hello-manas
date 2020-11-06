
/* Cifra de Cesar

A  B  C  D  E  F  G  H  I  J  K  L  M  
0  1  2  3  4  5  6  7  8  9  10 11 12  

N  O  P  Q  R  S  T  U  V  W  X  Y  Z
13 14 15 16 17 18 19 20 21 22 23 24 25 */

const cipher = {
  encode(offset, string){
   
    let codificada = "";
    if (offset == null || !string) throw new TypeError("ERRO!");

    for (let i = 0; i < string.length; i++) {
        let codAsc = string.charCodeAt(i);
        let offsetIndex = ((codAsc - 65 + offset) % 26) + 65;
        if (codAsc <= 64 || codAsc >= 91) {
            offsetIndex = codAsc; 
        }
        codificada += String.fromCharCode(offsetIndex);
    }
    return codificada;
 },
 
  decode(offset, string){
    let decodificada = "";
    if (offset == null || !string) throw new TypeError("ERRO!");

    for (let i = 0; i < string.length; i++) {
        let codAsc = string.charCodeAt(i);
        let offsetIndex = (codAsc - 65 - (offset % 26) + 26) % 26 + 65; 
        if (codAsc <= 64 || codAsc >= 91) {
            offsetIndex = codAsc;
        }
        decodificada += String.fromCharCode(offsetIndex);
    }
    return decodificada;
 }
   
};
export default cipher;







