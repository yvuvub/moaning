 function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function renderQuiz() {
      const container = document.getElementById('quiz');
      shuffle(questions);
      questions.forEach((q, idx) => {
        
        const qDiv = document.createElement('div');
        qDiv.className = 'question';

        const qText = document.createElement('h3');
        qText.textContent = `第${idx + 1}题：` + q.text;
        qDiv.appendChild(qText);

        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = q.audio;

        // 播放时停止其他 audio
        audio.addEventListener('play', () => {
        document.querySelectorAll('audio').forEach(a => {
            if (a !== audio)
            {
                a.pause();
                a.currentTime = 0;
            } 
        });
        });

        qDiv.appendChild(audio);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        shuffle(q.options);
        q.options.forEach((opt, optIdx) => {
          const optDiv = document.createElement('label');
          optDiv.className = 'option';

          const input = document.createElement('input');
          input.type = 'radio';
          input.name = `q${idx}`;
          input.value = optIdx;
          input.style.display = 'none';

          optDiv.onclick = () => {
            // 取消当前题所有选项的视觉选中状态
            document.querySelectorAll(`input[name=q${idx}]`).forEach(i => {
                i.checked = false;
                i.closest('label').classList.remove('selected'); // 清除选中样式
            });

            // 设置当前点击项为选中
            input.checked = true;
            optDiv.classList.add('selected'); // 添加选中样式
            };

          const img = document.createElement('img');
          img.src = opt.image;

          optDiv.appendChild(input);
          optDiv.appendChild(img);
          optDiv.appendChild(document.createTextNode(opt.text));
          optionsDiv.appendChild(optDiv);
        });

        const warn = document.createElement('div');
        warn.className = 'warning';
        warn.id = `warn${idx}`;
        warn.textContent = '请先选择一个答案';

        qDiv.appendChild(optionsDiv);
        qDiv.appendChild(warn);
        container.appendChild(qDiv);
      });
    }


    function updateResult(score) {
        const resultBox = document.getElementById("resultBox");
        const scoreNumber = document.getElementById("scoreNumber");
        const scoreComment = document.getElementById("scoreComment");
        const resultImage = document.getElementById("resultImage");

        resultBox.classList.remove("hidden");
        console.log(scoreNumber.innerHTML);
        scoreNumber.innerHTML = score;

        if (score >= 90) {
            scoreComment.textContent = "你真是神人吧";
            resultImage.src = "asset/img/prefect.webp";
        } else if (score >= 70) {
            scoreComment.textContent = "婆罗门😱😱😱";
            resultImage.src = "asset/img/good.webp";
        } else if (score >= 40) {
            scoreComment.textContent = "不赖，听着想🦌了就去🦌吧";
            resultImage.src = "asset/img/soso.jpg";
        } else {
            scoreComment.textContent = "杂鱼~杂鱼~";
            resultImage.src = "asset/img/bad.jpg";
        }
    }


    function submitQuiz() {
      let allAnswered = true;
      let score = 0;

      questions.forEach((q, idx) => {
        const radios = document.querySelectorAll(`input[name=q${idx}]`);
        const warn = document.getElementById(`warn${idx}`);
        let selected = -1;
        radios.forEach((r, i) => {
          if (r.checked) selected = i;
        });

        if (selected === -1) {
          warn.style.display = 'block';
          allAnswered = false;
        } else {
          warn.style.display = 'none';
          if (q.options[selected].correct) {
            score += 5;
          }
        }
      });
      if(allAnswered)
      {
        updateResult(score);
      }

      
    }

    