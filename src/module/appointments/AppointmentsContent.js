import { useState } from "react"

const data = [

]


function AppointmentsContent() {
    const [data, setData] = useState([{
        id: 1,
        status: true,
        pati: "phong nguyen",
        start: "1000000",
        date: "33333333333",
        pickappointments: 'aaaaaa'
    }, {
        id: 2,
        status: true,
        pati: "phong nguyen",
        start: "1000000",
        date: "33333333333",
        pickappointments: 'aaaaaa'
    }, {
        id: 3,
        status: true,
        pati: "phong nguyen",
        start: "1000000",
        date: "33333333333",
        pickappointments: 'aaaaaa'
    }, {
        id: 4,
        status: true,
        pati: "phong nguyen",
        start: "1000000",
        date: "33333333333",
        pickappointments: 'aaaaaa'
    }, {
        id: 5,
        status: true,
        pati: "phong nguyen",
        start: "1000000",
        date: "3333 ",
        pickappointments: 'aaaaaa'
    }])

    return (
        <div className="bg-white p-5 rounded-3xl shadow-sm ">
            <div>
                <h1>

                </h1>
            </div>
            <tbody className="h-[500px]">
                {data?.map((p) => (
                    <tr key={p.id}>
                        <td >{p.status}</td>
                        <td >{p.pati}</td>
                        <td >{p.start}</td>
                        <td className="border-t-[1px] border-solid border-y-grayborder2">{p.date}</td>
                        <td >{p.pickappointments}</td>
                    </tr>
                ))}
            </tbody>
            {/* <div>

                <input type="button" onClick={() => setActive(!active)} value={"+"} />
                {active === true ? <>aaaaaaaaaaaaaaaa</> : <></>}
            </div> */}
        </div>
    )
}
export default AppointmentsContent