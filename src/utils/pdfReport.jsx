import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import api from "../api/axios";
import { toast } from "react-toastify";

const getBase64Image = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.crossOrigin = "Anonymous";

        img.onload = () => {
            const canvas = document.createElement("canvas");

            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");

            ctx.drawImage(img, 0, 0);

            const base64 = canvas.toDataURL("image/png");

            resolve(base64);
        };

        img.onerror = (err) => reject(err);

        img.src = url + "?t=" + new Date().getTime();
    });
};

export const downloadPDF = async () => {
    try {

        const response = await api.get("/Product/get-products");

        const products = response.data;

        const doc = new jsPDF("landscape", "mm", "a4");

        doc.setFontSize(20);
        doc.text("Agami Store Product Report", 14, 15);

        doc.setFontSize(11);
        doc.text(
            "Generated : " + new Date().toLocaleString(),
            14,
            23
        );

        const rows = [];
        const images = [];

        for (const item of products) {

            let img = null;

            try {

                img = await getBase64Image(item.imageUrl);

            } catch (err) {

                console.log("Image Error :", err);

            }

            images.push(img);

            rows.push([
                item.productId,
                "",                     // Image column kept blank
                item.clothName,
                item.clothType,
                item.brandName,
                item.gender,
                 item.price,
                item.description,
                item.status ? "Active" : "Inactive"
            ]);
        }

        autoTable(doc, {

            startY: 30,

            head: [[
                "ID",
                "Image",
                "Cloth Name",
                "Type",
                "Brand",
                "Gender",
                "Price",
                "Description",
                "Status"
            ]],

            body: rows,

            styles: {
                fontSize: 9,
                cellPadding: 2,
                minCellHeight: 22,
                halign: "center",
                valign: "middle"
            },

            headStyles: {
                fillColor: [37, 99, 235],
                textColor: 255,
                fontStyle: "bold"
            },

            columnStyles: {
                0: { cellWidth: 15 },
                1: { cellWidth: 25 },
                2: { cellWidth: 35 },
                3: { cellWidth: 25 },
                4: { cellWidth: 35 },
                5: { cellWidth: 22 },
                6: { cellWidth: 22 },
                7: { cellWidth: 55 },
                8: { cellWidth: 22 }
            },

            didDrawCell: function (data) {

                if (
                    data.section === "body" &&
                    data.column.index === 1
                ) {

                    const img = images[data.row.index];

                    if (img) {

                        try {

                            doc.addImage(
                                img,
                                "PNG",
                                data.cell.x + 2,
                                data.cell.y + 2,
                                18,
                                18
                            );

                        } catch (e) {

                            console.log("Add Image Error", e);

                        }

                    }

                }

            }

        });
        toast.success("PDF generated successfully!");

        doc.save("Agami_Product_Report.pdf");

    } catch (err) {

        console.log(err);
        toast.error("Unable to generate PDF.");
        // alert("Unable to generate PDF.");

    }
};