//SWAP

const swap = (array, posicao_1, posicao_2) => {
    if (posicao_1 < 0 || posicao_1 >= array.length || posicao_2 < 0 || posicao_2 >= array.length) {
        console.error('Posições inválidas.');
        return;
    }
    
    [array[posicao_1], array[posicao_2]] = [array[posicao_2], array[posicao_1]];
}




//SHUFFLE

const shuffle = (array, num_trocas) => {
    const len = array.length;
    
    for (let i = 0; i < num_trocas; i++) {
        let pos1 = Math.floor(Math.random() * len);
        let pos2 = Math.floor(Math.random() * len);
        
        [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
    }
    
    return array;
}

//BUBBLE_SORT

const bubble_sort = (vetor) => {
    const n = vetor.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];
            }
        }
    }

    return vetor;
};

//SELECTION SORT

const selection_sort = (vetor) => {
    const n = vetor.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

    
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [vetor[i], vetor[minIndex]] = [vetor[minIndex], vetor[i]];
        }
    }

    return vetor;
};


//QUICK_SORT

const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
    if (inicio < fim) {
        const indiceParticao = partition(vetor, inicio, fim);

        quick_sort(vetor, inicio, indiceParticao - 1);
        quick_sort(vetor, indiceParticao + 1, fim);
    }

    return vetor;
};

//PARTITION

const partition = (vetor, inicio, fim) => {
    const pivot = vetor[fim];
    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        if (vetor[j] <= pivot) {
            i++;
            [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
        }
    }

    [vetor[i + 1], vetor[fim]] = [vetor[fim], vetor[i + 1]];
    return i + 1;
};