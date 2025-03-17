import { useEffect, useState } from "react"

export const useField = () => {
    const [field, setField] = useState([])

    const makeField = () => {
        setField(
            [
                [0, 0, 0, 0],
                [0, 2, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        )
    }
    const moveLeft = () => {
        setField(prev => {
            const newField = structuredClone(prev);
            
            for (let y = 0; y < newField.length; y++) {
                
                const row = newField[y].filter(num => num !== 0); // 0を除外して新しい行を作成
                console.log(row);
                
                const mergedRow = [];
                
                for (let x = 0; x < row.length; x++) {
                    if (row[x] === row[x + 1]) {
                        // 同じ数値をマージ
                        mergedRow.push(row[x] * 2);
                        x++; // 次の数値をスキップ
                    } else {
                        mergedRow.push(row[x]);
                    }
                }
    
                // 最後に0を追加して長さを4にする
                while (mergedRow.length < 4) {
                    mergedRow.push(0);
                }
    
                // 新しい行をフィールドに更新
                newField[y] = mergedRow;
            }
    
            return newField;
        });
        ends()
        newBlock()
    }

    
    const moveRight = () => {
        setField(prev => {
            const newField = structuredClone(prev);
            
            for (let y = 0; y < newField.length; y++) {
                
                const row = newField[y].filter(num => num !== 0); // 0を除外して新しい行を作成
                console.log(row);
                
                const mergedRow = [];
                
                for (let x = row.length - 1; x >= 0; x--) {
                    if (row[x - 1] === row[x]) {
                        // 同じ数値をマージ
                        mergedRow.unshift(row[x] * 2);
                        x--; // 次の数値をスキップ
                    } else {
                        mergedRow.unshift(row[x]);
                    }
                }
    
                // 最後に0を追加して長さを4にする
                while (mergedRow.length < 4) {
                    mergedRow.unshift(0);
                }
    
                // 新しい行をフィールドに更新
                newField[y] = mergedRow;
            }
    
            return newField;
        });
        ends()
        newBlock()
    }

    const moveUp = () => {
        setField(prev => {
            const newField = structuredClone(prev);
            for (let x = 0; x < newField.length; x++) {
                const column = newField.map (row => row[x]).filter(num =>num !== 0);

                 // 0を除外して新しい行を作成
                console.log(column);
                
                const mergedRow = [];
                
                for (let y = 0; y < column.length; y++) {
                    if (y < column.length - 1 && column[y] === column[y + 1]) {
                        // 同じ数値をマージ
                        mergedRow.push(column[y] * 2);
                        y++; // 次の数値をスキップ
                    } else {
                        mergedRow.push(column[y]);
                    }
                }
    
                // 最後に0を追加して長さを4にする
                while (mergedRow.length < 4) {
                    mergedRow.push(0);
                }
    
                // 新しい行をフィールドに更新
                for (let y = 0; y < 4; y++) {
                    newField[y][x] = mergedRow[y];
                }
            }
    
            return newField;
        });
        ends()
        newBlock()
    }

    const moveDown = () => {
        setField(prev => {
            const newField = structuredClone(prev);

            for (let x = 0; x < newField.length; x++) {
                const column = newField.map (row => row[x]).filter(num =>num !== 0);// 列を作成し、0を除外
                const mergedRow = [];

                console.log(column);
                
                for (let y = column.length - 1; y >= 0; y--) {
                    if (y > 0 && column[y] === column[y - 1]) {
                        // 同じ数値をマージ
                        mergedRow.unshift(column[y] * 2);
                        y--; // 次の数値をスキップ
                    } else {
                        mergedRow.unshift(column[y]);
                    }
                }
    
                // 最後に0を追加して長さを4にする
                while (mergedRow.length < 4) {
                    mergedRow.unshift(0);
                }
    
                // 新しい行をフィールドに更新
                for (let y = 0; y < 4; y++) {
                    newField[y][x] = mergedRow[y];
                }
            }
    
            return newField;
        });
        ends()
        newBlock()
    }

    const handleKey=(e)=>{
        switch (e.key) {
            case "ArrowLeft":
                moveLeft()
                break;
            case "ArrowRight":
                moveRight()
                console.log("");

                break;
            case "ArrowUp":
                moveUp()
                console.log("");

                break;
            case "ArrowDown":
                moveDown()
                console.log("");

                break;
        }
    }
    
    const ends = () => {
        for (let y = 0; y < field.length; y++){
            for (let x = 0; x < field.length; x++){
                if (field[y][x] === 0) {
                    return false; // 空のマスがある場合、ゲームは続行中
                }
                // 隣接するマスが同じ値かどうかをチェック
                if (x < field[y].length - 1 && field[y][x] === field[y][x + 1]) {
                    return false; // 水平方向にマージ可能
                }
                if (y < field.length - 1 && field[y][x] === field[y + 1][x]) {
                    return false; // 垂直方向にマージ可能
                }
            }
        }
        setIsGameOver(true);
        return true;
    };

    const newBlock = () => {
        setField (prev => {
            const arr = []
            const newField = structuredClone(prev)
            for (let y = 0; y < newField.length; y++) {
                for (let x = 0; x < newField.length; x++) {
                    if (newField[y][x] === 0) {
                        arr.push({x: x, y: y})
                    }
                }
            }
            if(arr.length !=0){
                const rand = Math.floor(Math.random()*arr.length)
                newField[arr[rand].y][arr[rand].x] = 2
               
            }

            return newField

        })
        
    }

    useEffect(() => {
        if (field.length === 0) return;
        window.addEventListener("keydown",handleKey)
        return ()=>{
            window.removeEventListener("keydown",handleKey)
        }
    }, [field]);

    useEffect(() => {
        makeField()
    }, [])

    return { field }
}
    