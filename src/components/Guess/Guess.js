import React, {useEffect, useRef, useState} from 'react';
import './Guess.css';

const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Enter',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '<<'
]

export default function Guess () {
    const [guess, setGuess] = useState([])
    const attemptsCountRef = useRef(0)
    const [field, setField] = useState(guessRows)
    const animationRef = useRef(false)

    const word = "hello"

    function handleKeyDown({key}) {
        console.log(key)
        if((key === "Backspace" || key === "<<") && !animationRef.current) {
            let tempField = [...field]
            tempField[attemptsCountRef.current][guess.length - 1] = ''
            setField(tempField)

            setGuess((prev) => field[attemptsCountRef.current].filter(letter => letter !== ''))
        } else if (key === "Enter" && guess.length === 5 && !animationRef.current) {
            animationRef.current = true
            let correct = 0
            const rowTiles = document.querySelector('#guessRow-' + attemptsCountRef.current).childNodes
            rowTiles.forEach((tile, tileIndex) => {
                let letter = guessRows[attemptsCountRef.current][tileIndex]
                setTimeout(() => {
                    tile.classList.add('flip')
                    if(letter === word[tileIndex]) {
                        correct += 1
                        tile.classList.add('green-flip')
                    } else if(word.includes(letter)) {
                        tile.classList.add('yellow-flip')
                    } else {
                        tile.classList.add('grey-flip')
                    }

                    if(tileIndex === 4) {
                        setTimeout(() => {
                            animationRef.current = false
                            if(correct === 5) {
                                
                            }
                        }, 500)
                    }
                }, 500 * tileIndex)
            })

            setGuess([])
            attemptsCountRef.current += 1
        } else if(guess.length < 5 && !animationRef.current) {
            const isChar = /^[a-zA-Z]$/.test(key)
            key = key.toLowerCase()
            if(isChar) {
                setGuess((prev) => [...prev, key])
                let tempField = [...field]
                tempField[attemptsCountRef.current][guess.length] = key
                setField(tempField)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [guess.length])

    return (
        <div className="wordle">
            <div className="game">
                <div className="tile-container">
                    {field.map((guessRow, guessRowIndex) => (
                        <div className="guessRow" id={"guessRow-" + guessRowIndex}>
                            {guessRow.map((cell, cellIndex) => (
                                <div id={"guessRow-" + guessRowIndex + "-tile-" + cellIndex}
                                     className={"tile " + (cell ? "typed" : "")}>
                                    {cell}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="keyboard">
                <div className="keyboard_container">
                    {keys.map((key, keyIndex) => (
                        <button type="button" onClick={() => {
                            handleKeyDown({key})
                        }}>{key}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}
