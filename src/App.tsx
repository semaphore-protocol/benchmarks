import { Group } from "@semaphore-protocol/group"
import { Identity } from "@semaphore-protocol/identity"
import { FullProof, generateProof as _generateProof, verifyProof as _verifyProof } from "@semaphore-protocol/proof"
import { useCallback, useState } from "react"
import "./App.css"
import semaphoreLogo from "./assets/semaphore.svg"

function App() {
    const [time, setTime] = useState<number>(0.0)
    const [info, setInfo] = useState<string>("Click on the button to generate a Semaphore proof.")
    const [proof, setProof] = useState<FullProof>()

    const generateProof = useCallback(async function () {
        const identity = new Identity()
        const group = new Group(1)

        group.addMember(identity.commitment)

        setInfo("Generating proof...")
        const t0 = performance.now()

        const proof = await _generateProof(identity, group, 1, 1, {
            wasmFilePath: "./semaphore.wasm",
            zkeyFilePath: "./semaphore.zkey"
        })

        const t1 = performance.now()

        setTime((t1 - t0) / 1000)
        setInfo("Proof generated!")

        setProof(proof)
        console.log(proof)
    }, [])

    const verifyProof = useCallback(
        async function () {
            if (proof) {
                setInfo("Verifiying proof...")
                const t0 = performance.now()

                await _verifyProof(proof, 20)

                const t1 = performance.now()

                setTime((t1 - t0) / 1000)
                setInfo("Proof verified!")
            }
        },
        [proof]
    )

    return (
        <div className="App">
            <a href="https://semaphore.appliedzkp.org" target="_blank">
                <img src={semaphoreLogo} className="logo react" alt="React logo" />
            </a>
            <h1>Semaphore</h1>
            <h3>{time} s</h3>
            <button onClick={() => generateProof()}>Generate proof</button>
            <br />
            <br />
            <button onClick={() => verifyProof()}>Verify proof</button>
            <p className="info">{info}</p>
        </div>
    )
}

export default App
