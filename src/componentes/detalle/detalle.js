import { useEffect, useState } from "react";

const Detalle = () => {
    const [producto, setProducto] = useState("1");
    const [favorito, setFavorito] = useState("");
    const mini_img = [1, 2, 3, 4, 5];

    const changeImg = (img) => {
        setProducto(img)
    }

    const changeArrow = (arrow) => {
        console.log(producto);
        if (arrow === "siguiente") {
            producto >= 1 && producto < 5 ?
                setProducto(parseInt(producto) + 1) :
                setProducto(producto);
        } else {
            producto <= 5 && producto > 1 ?
                setProducto(parseInt(producto) - 1) :
                setProducto(producto);
        }
    }
    const changeFavorito = () => {
        favorito === "" ?
            setFavorito("activo") :
            setFavorito("");
    }
    return (
        <main>
            <div className="descripcion">
                <h2>
                    Black technical knit fabric high-tops
                </h2>
                <p>
                    Running sneakers whith thin elastic laces
                </p>
                <div className="div-mini-img">
                    {
                        mini_img.map((elemento, indice) =>
                            <div className="mini-img" key={indice} onClick={() => changeImg(elemento)}>
                                <img src={`/imagenes/zapatillas${elemento}.jpg`} />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="producto-img">
                <img src={`/imagenes/zapatillas${producto}.jpg`} />
            </div>
            <div className="detalles">
                <div className="div-talles">
                    <h3>
                        SIZE
                    </h3>
                    <div className="talles">
                        <div>37</div>
                        <div>38</div>
                        <div>39</div>
                        <div>40</div>
                        <div>41</div>
                    </div>
                </div>
                <div>
                    REVIEWS <span>estrellas</span>
                </div>
                <div className="precio">
                    PRICE <span>$450</span>
                </div>
                <div className="div-colores">
                    <h3>COLOUR</h3>
                    <div className="colores">
                        <div className="div1"></div>
                        <div className="div2"></div>
                        <div className="div3"></div>
                        <div className="div4"></div>
                    </div>
                </div>
            </div>
            <div className="footerDetalles">
                <div className="siguiente-anterior">
                    <span className="material-symbols-outlined" onClick={() => changeArrow("anterior")}>
                        keyboard_backspace
                    </span>
                    <span className="material-symbols-outlined" onClick={() => changeArrow("siguiente")}>
                        arrow_right_alt
                    </span>
                </div>
                <div className="addToCart">
                    <button className="button">
                        ADD TO CART
                    </button>
                    <span className="material-symbols-outlined" style={favorito===""?{}:{color:"red", fontWeight:"700"}} onClick={changeFavorito}>
                        favorite
                    </span>
                </div>
            </div>
        </main>
    )
}
export default Detalle;