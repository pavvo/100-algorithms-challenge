areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
    }
