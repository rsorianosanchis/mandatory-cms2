{
  totalKopt.map((produkt, index) => {
    console.log(index);

    return (
      <tr key={index}>
        <td>{produkt.namn}</td>
        <td>{produkt.itemAntal}</td>
        <td>{produkt.pris}</td>
        <td>{produkt.prisTotal}</td>
      </tr>
    );
  });
}
