function solution(n) {
    let answer = 0;

    function pow(x, y) {
        if(y === 0) return 1;

        return x*pow(x, y-1);
    }

    function decimalToReverseTripartite(decimal) {
        let ret = "";
        decimal = parseInt(decimal);

        while(decimal >= 3) {
            let q = parseInt(decimal/3);
            let r = decimal%3;

            ret += r.toString();
            decimal = q;
        }

        ret += decimal.toString();

        // 그냥 리턴하면 뒤집은 결과가 리턴된다.
        return ret;
    }

    function tripartiteToDecimal(tripartite) { 
        let ret = 0;

        for(let i=0; i<tripartite.length; i++) 
            ret += (parseInt(tripartite[i]) * pow(3, tripartite.length-i-1));

        return ret;
    }

    let reversedTripartite = decimalToReverseTripartite(n)
    answer = tripartiteToDecimal(reversedTripartite);

    return answer;
}