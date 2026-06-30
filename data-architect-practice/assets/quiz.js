/* ============================================================================
   Eigenbasis Lab — reusable self-check widget (vanilla, no deps).
   Two retrieval-practice primitives, both with immediate automatic feedback:

   1. RECALL CARD — retrieval practice. Markup:
      <div class="recall"><p class="q">prompt…</p>
        <div class="a">hidden answer…</div></div>
      Click the card to flip question -> answer.

   2. MCQ — multiple choice. Markup:
      <div class="mcq" data-explain="why the answer is what it is">
        <p class="q">question…</p>
        <button data-correct>right answer</button>
        <button>distractor</button> …
      </div>
      Click an option -> instant correct/incorrect colouring + explanation.
      Keep every option the same length so formatting leaks no clues.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const css = document.createElement('style');
  css.textContent = `
    .recall{border:1px solid var(--rule);border-radius:11px;margin:12px 0;padding:14px 16px;
      cursor:pointer;background:var(--paper);transition:background .15s;}
    .recall:hover{background:var(--paper-2);}
    .recall .q{margin:0;font-weight:600;}
    .recall .q::before{content:"RECALL  ";font-family:var(--mono);font-size:10px;
      letter-spacing:.14em;color:var(--accent-2);}
    .recall .a{margin:11px 0 0;display:none;border-top:1px dashed var(--rule);padding-top:11px;
      font-size:15px;color:var(--ink-soft);}
    .recall.open .a{display:block;}
    .recall .hint{font-family:var(--mono);font-size:10.5px;color:var(--accent);
      letter-spacing:.1em;margin-top:9px;display:block;}
    .recall.open .hint{display:none;}

    .mcq{border:1px solid var(--rule);border-radius:11px;margin:14px 0;padding:14px 16px;background:var(--paper);}
    .mcq .q{margin:0 0 11px;font-weight:600;}
    .mcq button{display:block;width:100%;text-align:left;font:inherit;font-size:14.5px;
      margin:7px 0;padding:9px 13px;border:1px solid var(--rule);border-radius:8px;
      background:var(--paper-2);cursor:pointer;transition:all .12s;}
    .mcq button:hover:not(:disabled){border-color:var(--ink);}
    .mcq button.right{background:rgba(15,122,90,.14);border-color:var(--good);color:var(--ink);}
    .mcq button.wrong{background:rgba(178,59,46,.12);border-color:var(--bad);color:var(--ink);}
    .mcq button:disabled{cursor:default;opacity:.85;}
    .mcq .explain{display:none;margin:10px 0 0;padding:10px 13px;border-left:3px solid var(--accent);
      background:var(--paper-2);border-radius:0 8px 8px 0;font-size:14.5px;}
    .mcq.answered .explain{display:block;}
  `;
  document.head.appendChild(css);

  document.querySelectorAll('.recall').forEach(card => {
    const hint = document.createElement('span');
    hint.className = 'hint'; hint.textContent = 'click to reveal →';
    card.appendChild(hint);
    card.addEventListener('click', () => card.classList.toggle('open'));
  });

  document.querySelectorAll('.mcq').forEach(q => {
    const explain = document.createElement('p');
    explain.className = 'explain';
    explain.textContent = q.dataset.explain || '';
    q.appendChild(explain);
    q.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        if (q.classList.contains('answered')) return;
        q.classList.add('answered');
        q.querySelectorAll('button').forEach(b => {
          b.disabled = true;
          if (b.hasAttribute('data-correct')) b.classList.add('right');
        });
        if (!btn.hasAttribute('data-correct')) btn.classList.add('wrong');
      });
    });
  });
});
