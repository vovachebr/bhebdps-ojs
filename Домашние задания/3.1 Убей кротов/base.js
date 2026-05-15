(() => {
  let playing = true,
    activeHole = 1,
    hits = 0,
    misses = 0;

  const stop = () => playing = false,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );

  const checkGameOver = () => {
    if (hits >= 10) {
      alert('Победа! Вы убили 10 кротов!');
      stop();
      hits = 0;
      misses = 0;
      return true;
    } else if (misses >= 5) {
      alert('Поражение! 5 промахов.');
      stop();
      hits = 0;
      misses = 0;
      return true;
    }
    return false;
  };

  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = () => {
      if (!playing) return;

      const hole = getHole(i);
      if (hole.className.includes('hole_has-mole')) {
        hits++;
        document.getElementById('hits') ?
          document.getElementById('hits').textContent = hits : null;
        deactivateHole(i);
        if (checkGameOver()) return;
      } else {
        misses++;
        document.getElementById('misses') ?
          document.getElementById('misses').textContent = misses : null;
        if (checkGameOver()) return;
      }
    };
  }

  next();
})();
