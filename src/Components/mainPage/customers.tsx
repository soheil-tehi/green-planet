import './customers.scss';

interface ImagePathProps {
    id: number,
    path: string
}

function Customers() {



    const imagePath: ImagePathProps[] = [
        { id: 1, path: "src/assets/Images/Customers/c1.png" },
        { id: 2, path: "src/assets/Images/Customers/c2.png" },
        { id: 3, path: "src/assets/Images/Customers/c3.png" },
        { id: 4, path: "src/assets/Images/Customers/c4.png" },
        { id: 5, path: "src/assets/Images/Customers/c5.png" },
        { id: 6, path: "src/assets/Images/Customers/c6.png" },
        { id: 7, path: "src/assets/Images/Customers/c7.png" },

    ]

    return (
        <section className='customers-container'>
            <h2>برخی از مشتری های
                <h2 style={{ display: "inline", color: "#026131" }}>  سبزینه   </h2>
            </h2>
            <div className='customers-logo-wrapper'>
                {imagePath.map((item: ImagePathProps) => (
                    <div className='customers-logo' key={item.id}>
                        <img src={item.path} />
                    </div>

                ))}
            </div>
        </section>
    )
}

export default Customers