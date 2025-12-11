import { UnitData, QuestionType } from './types';

export const UNITS: UnitData[] = [
  {
    id: 1,
    title: "Unit 1: Life - Past and Present",
    vocab: [
      { word: "blog", transcription: "/blɒɡ/", definition: "(n) (v): nhật kí trực tuyến, viết nhật ký trực tuyến" },
      { word: "communicate", transcription: "/kəˈmjuːnɪkeɪt/", definition: "(v): truyền đạt, liên lạc" },
      { word: "communication", transcription: "/kəˌmjuːnɪˈkeɪʃᵊn/", definition: "(n): sự truyền đạt, sự liên lạc" },
      { word: "diary", transcription: "/ˈdaɪəri/", definition: "(n): nhật kí" },
      { word: "email", transcription: "/ˈiːmeɪl/", definition: "(n): thư điện tử" },
      { word: "face-to-face", transcription: "/feɪs tuː feɪs/", definition: "(adv): (gặp gỡ, nói chuyện) trực tiếp" },
      { word: "letter", transcription: "/ˈlɛtə/", definition: "(n): thư, thư tín" },
      { word: "smartphone", transcription: "/ˈsmɑːtfəʊn/", definition: "(n): điện thoại thông minh" },
      { word: "social media", transcription: "/ˈsəʊʃᵊl ˈmiːdiə/", definition: "(n): truyền thông mạng xã hội" },
      { word: "telephone", transcription: "/ˈtɛlɪfəʊn/", definition: "(n): điện thoại" },
      { word: "text message", transcription: "/tɛkst ˈmɛsɪʤ/", definition: "(n): tin nhắn văn bản" },
      { word: "vlog", transcription: "/vlɒɡ/", definition: "(n): nhật kí video" },
      { word: "carrier pigeon", transcription: "/ˈkæriə ˈpɪʤən/", definition: "(n): bồ câu đưa thư" },
      { word: "deliver", transcription: "/dɪˈlɪvə/", definition: "(v): giao, truyền (thông điệp)" },
      { word: "delivery", transcription: "/dɪˈlɪvᵊri/", definition: "(n): (dịch vụ) giao hàng" },
      { word: "generation", transcription: "/ˌʤɛnəˈreɪʃᵊn/", definition: "(n): thế hệ, đời" },
      { word: "generation gap", transcription: "/ˌʤɛnəˈreɪʃᵊn ɡæp/", definition: "(n): khoảng cách thế hệ" },
      { word: "telegraph machine", transcription: "/ˈtɛlɪɡrɑːf məˈʃiːn/", definition: "(n): máy điện báo" },
      { word: "buy food from street vendors", transcription: "/baɪ fuːd frɒm striːt ˈvɛndɔːz/", definition: "(phr): mua thức ăn từ người bán hàng rong" },
      { word: "drive cars", transcription: "/draɪv kɑːz/", definition: "(phr): lái xe ô tô" },
      { word: "eat at restaurants", transcription: "/iːt æt ˈrɛstᵊrɒnts/", definition: "(phr): ăn ở nhà hàng" },
      { word: "listen to the radio", transcription: "/ˈlɪsᵊn tuː ðə ˈreɪdiəʊ/", definition: "(phr): nghe ra-đi-ô" },
      { word: "play computer games", transcription: "/pleɪ kəmˈpjuːtə ɡeɪmz/", definition: "(phr): chơi trò chơi trên máy tính" },
      { word: "play folk games", transcription: "/pleɪ fəʊk ɡeɪmz/", definition: "(phr): chơi trò chơi dân gian" },
      { word: "ride horses", transcription: "/raɪd ˈhɔːsɪz/", definition: "(phr): cưỡi ngựa" },
      { word: "shop at markets", transcription: "/ʃɒp æt ˈmɑːkɪts/", definition: "(phr): mua sắm ở chợ" },
      { word: "shop online", transcription: "/ʃɒp ˈɒnˌlaɪn/", definition: "(phr): mua sắm trực tuyến" },
      { word: "watch videos online", transcription: "/wɒʧ ˈvɪdiəʊz ˈɒnˌlaɪn/", definition: "(phr): xem video trực tuyến" },
      { word: "wear casual clothes", transcription: "/weə ˈkæʒjuəl kləʊðz/", definition: "(phr): mặc trang phục thường ngày" },
      { word: "wear traditional clothes", transcription: "/weə trəˈdɪʃᵊnᵊl kləʊðz/", definition: "(phr): mặc trang phục truyền thống" },
      { word: "do the housework", transcription: "/duː ðə ˈhaʊswɜːk/", definition: "(phr): làm việc nhà" },
      { word: "extended family", transcription: "/ɪkˈstɛndɪd ˈfæmᵊli/", definition: "(n): gia đình nhiều thế hệ" },
      { word: "hand-drawn cart", transcription: "/hænd drɔːn kɑːt/", definition: "(phr): xe kéo bằng tay" },
      { word: "household", transcription: "/ˈhaʊshəʊld/", definition: "(n): hộ (gia đình)" },
      { word: "make a living", transcription: "/meɪk ə ˈlɪvɪŋ/", definition: "(phr): kiếm sống" },
      { word: "nuclear family", transcription: "/ˈnjuːklɪə ˈfæmᵊli/", definition: "(n): gia đình hạt nhân" },
      { word: "raise children", transcription: "/reɪz ˈʧɪldrən/", definition: "(phr): nuôi dạy con cái" },
      { word: "support the family", transcription: "/səˈpɔːt ðə ˈfæmᵊli/", definition: "(phr): chu cấp cho gia đình" }
    ],
    grammar: [
      {
        title: "Present Simple (Thì Hiện tại Đơn)",
        content: `**Công thức (Form)**
• **Khẳng định**: S + V(s/es)
• **Phủ định**: S + do/does not + V(nguyên mẫu)
• **Câu hỏi**: Do/Does + S + V(nguyên mẫu)?
• **Câu trả lời ngắn**:
  - Yes, S + do/does.
  - No, S + don’t/doesn’t.

**Cách viết (Spelling Rules)**
• Động từ tận cùng bằng **-ss, -sh, -ch, -x, -o**: thêm **-es**.
  - Ex: I miss -> he **misses**, I watch -> he **watches**, I go -> he **goes**, I fix -> he **fixes**, I do -> he **does**.
• Động từ tận cùng bằng **phụ âm + y**: bỏ **-y** và thêm **-ies**.
  - Ex: I worry -> she **worries**.
• Động từ tận cùng bằng **nguyên âm + y**: thêm **-s**.
  - Ex: I stay -> she **stays**.
• Động từ khác: thêm **-s**.
  - Ex: I walk -> she **walks**.

**Phát âm (Pronunciation)**
• **/ɪz/**: sau các âm /s/, /ʃ/, /ʧ/, /ʤ/, /z/ (misses, brushes, touches, changes, rises).
• **/s/**: sau các âm /p/, /k/, /t/, /f/, /θ/ (jumps, walks, hits, coughs, months).
• **/z/**: sau các âm còn lại (goes, says, calls, lives).

**Cách sử dụng (Usage)**
• Trạng thái chung, sở thích và sự thật (General truths & facts).
  - Ex: They **like** going on social media.
• Trạng thái và tình huống thường trực (Permanent situations).
  - Ex: My mum **works** in a hospital.
• Thói quen và công việc thường ngày (Habits & routines).
  - Ex: Tim and Lola **surf** the Internet every day.
• Chương trình và thời gian biểu (Timetables).
  - Ex: The post office **closes** at 5:00 p.m.

**Dấu hiệu nhận biết**: every hour/day/week, in the morning/afternoon, at night/noon/weekend, on Mondays, etc.`
      },
      {
        title: "Present Continuous (Thì Hiện tại Tiếp diễn)",
        content: `**Công thức (Form)**
• **Khẳng định**: S + am/is/are + V-ing
• **Phủ định**: S + am/is/are not + V-ing
• **Câu hỏi**: Am/Is/Are + S + V-ing?

**Cách viết (Spelling Rules)**
• Hầu hết động từ: thêm **-ing** (look -> **looking**).
• Tận cùng bằng **phụ âm + -e**: bỏ **-e** thêm **-ing** (make -> **making**).
• Tận cùng bằng **1 phụ âm + 1 nguyên âm + 1 phụ âm** (nhấn trọng âm): nhân đôi phụ âm cuối (get -> **getting**, begin -> **beginning**).
• Tận cùng bằng **-ie**: bỏ **-ie** thêm **-ying** (lie -> **lying**).

**Cách sử dụng (Usage)**
• Hành động đang xảy ra lúc nói (Actions happening now).
  - Ex: I **am writing** a letter now.
• Tình huống tạm thời (Temporary situations).
  - Ex: Nhi **is making** vlogs these days.
• Kế hoạch tương lai chắc chắn (Definite future plans).
  - Ex: They **are going** on a picnic tomorrow morning.

**Lưu ý (Note)**
• Không dùng với động từ chỉ trạng thái (Stative verbs): **be, want, love, like, prefer, believe, know, need, agree**...
  - Correct: I **love** eating.
  - Incorrect: I ~~am loving~~ eating.`
      },
      {
        title: "Past Simple (Thì Quá khứ Đơn)",
        content: `**Công thức (Form)**
• **Khẳng định**: S + V2/ed
• **Phủ định**: S + did not (didn’t) + V(nguyên mẫu)
• **Câu hỏi**: Did + S + V(nguyên mẫu)?

**Cách viết (Spelling Rules)**
• Tận cùng bằng **-e**: thêm **-d** (like -> **liked**).
• Tận cùng bằng **phụ âm + -y**: bỏ **-y** thêm **-ied** (try -> **tried**).
• Tận cùng bằng **nguyên âm + -y**: thêm **-ed** (stay -> **stayed**).
• Tận cùng bằng **1 nguyên âm + 1 phụ âm** (nhấn trọng âm): nhân đôi phụ âm cuối (stop -> **stopped**).

**Phát âm đuôi -ed**
• **/ɪd/**: sau âm /t/, /d/ (wanted, needed).
• **/t/**: sau âm /f/, /k/, /p/, /s/, /ʃ/, /ʧ/ (laughed, cooked, hoped, kissed, washed, watched).
• **/d/**: sau các âm còn lại (played, loved, cleaned).

**Động từ bất quy tắc (Irregular Verbs)**
• go -> **went**, buy -> **bought**, come -> **came**, fall -> **fell**, etc.

**Cách sử dụng (Usage)**
• Hành động xảy ra tại thời điểm cụ thể trong quá khứ.
  - Ex: I **sent** an email yesterday.
• Chuỗi hành động liên tiếp trong quá khứ.
  - Ex: She **wrote** a blog, **edited** it and **posted** it.`
      },
      {
        title: "Past Continuous (Thì Quá khứ Tiếp diễn)",
        content: `**Công thức (Form)**
• **Khẳng định**: S + was/were + V-ing
• **Phủ định**: S + was/were not + V-ing
• **Câu hỏi**: Was/Were + S + V-ing?

**Cách sử dụng (Usage)**
• Hành động đang diễn ra tại thời điểm cụ thể trong quá khứ.
  - Ex: She **was talking** on the phone at 8:00 yesterday.
• Hành động kéo dài liên tục trong một khoảng thời gian (nhấn mạnh tính liên tục).
  - Ex: Teddy **was playing** games all yesterday afternoon.
• Hai hành động xảy ra song song.
  - Ex: I **was watching** TV while my sister **was doing** yoga.
• Hành động đang xảy ra (Past Cont) thì hành động khác cắt ngang (Past Simple).
  - Ex: Lucy **was listening** to the radio when the doorbell **rang**.

**Lưu ý về While/When**
• **While** + Quá khứ Tiếp diễn (While she was having a bath...).
• **When** + Quá khứ Đơn (When he got home...).`
      },
      {
        title: "Wish + Past Simple",
        content: `**Định nghĩa**
• Diễn tả điều ước về một sự việc không có thật ở hiện tại.

**Công thức**
• S + wish + S + **V2/ed** (Quá khứ Đơn)
• Với động từ **to be**, dùng **were** cho tất cả các ngôi (I, he, she, it...).

**Ví dụ**
• I wish I **were** good at English. (Real: I am not good).
• He wishes he **had** a new bike. (Real: He doesn't have one).
• Rosy wishes she **could ride** a horse. (Real: She cannot ride).`
      }
    ],
    practice: [
      { id: 1, type: QuestionType.MULTIPLE_CHOICE, text: "PRONUNCIATION: Choose the word whose underlined part differs.\nA. bl__o__g  B. smartph__o__ne  C. s__o__cial  D. radi__o__", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "Blog /ɒ/ vs /əʊ/ in others." },
      { id: 2, type: QuestionType.MULTIPLE_CHOICE, text: "PRONUNCIATION: Choose the word whose underlined part differs.\nA. blog__s__  B. send__s__  C. wear__s__  D. shop__s__", options: ["A", "B", "C", "D"], correctAnswer: "D", explanation: "Shops /s/ vs /z/ in others." },
      { id: 3, type: QuestionType.MULTIPLE_CHOICE, text: "PRONUNCIATION: Choose the word whose underlined part differs.\nA. watch__ed__  B. listen__ed__  C. play__ed__  D. enjoy__ed__", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "Watched /t/ vs /d/ in others." },
      { id: 4, type: QuestionType.MULTIPLE_CHOICE, text: "STRESS: Choose the word with different stress position.\nA. diary  B. telephone  C. deliver  D. carrier", options: ["A", "B", "C", "D"], correctAnswer: "C", explanation: "Deliver (2nd) vs 1st in others." },
      { id: 5, type: QuestionType.MULTIPLE_CHOICE, text: "STRESS: Choose the word with different stress position.\nA. generation  B. communicate  C. entertainment  D. presentation", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "Communicate (2nd) vs 3rd in others." },
      { id: 6, type: QuestionType.MULTIPLE_CHOICE, text: "I think the best way of communication is __________ because besides words, we can use body language, voice and tone to express our ideas easily.", options: ["sending text messages", "using carrier pigeons", "using telegraph", "speaking face-to-face"], correctAnswer: "speaking face-to-face" },
      { id: 7, type: QuestionType.MULTIPLE_CHOICE, text: "Tina is a well-known KOL. She ___________ vlogs for TikTok every week.", options: ["writes", "write", "makes", "make"], correctAnswer: "makes" },
      { id: 8, type: QuestionType.MULTIPLE_CHOICE, text: "At 10 p.m. last night, Tennie __________ her profile picture.", options: ["updated", "was updating", "updates", "is updating"], correctAnswer: "was updating" },
      { id: 9, type: QuestionType.MULTIPLE_CHOICE, text: "We used to ________ food from street vendors 50 years ago.", options: ["bought", "buying", "buy", "buys"], correctAnswer: "buy" },
      { id: 10, type: QuestionType.MULTIPLE_CHOICE, text: "A: Were clothing 100 years ago the same as clothing styles today?\nB: Yes. _______________________________\nA: What did they wear on those days?", options: ["We did it 100 years ago.", "There were a lot of clothing styles 100 years ago.", "We wear the same clothes.", "People wore traditional clothes."], correctAnswer: "People wore traditional clothes." },
      { id: 11, type: QuestionType.MULTIPLE_CHOICE, text: "I don’t have my own smartphone. I wish my parents _______ me buy one for myself.", options: ["let", "lets", "letted", "letting"], correctAnswer: "let" },
      { id: 12, type: QuestionType.MULTIPLE_CHOICE, text: "Many people think it’s easier to _____________ in big cities because they can find jobs more easily.", options: ["support living", "get a living", "make a living", "provide living"], correctAnswer: "make a living" },
      { id: 13, type: QuestionType.MULTIPLE_CHOICE, text: "A: What about travelling in the past? How did people go around?\nB: ________________________", options: ["Travelling in the past was longer.", "People used to ride horses.", "They got around all the time.", "How about travelling by bus?"], correctAnswer: "People used to ride horses." },
      { id: 14, type: QuestionType.MULTIPLE_CHOICE, text: "The children are playing computer games in the living room ___________.", options: ["at the moment", "in the past", "yesterday", "every day"], correctAnswer: "at the moment" },
      { id: 15, type: QuestionType.MULTIPLE_CHOICE, text: "We ___________ a new vlog on our camcorder when it was broken.", options: ["records", "record", "were recording", "recorded"], correctAnswer: "were recording" },
      { id: 16, type: QuestionType.MULTIPLE_CHOICE, text: "CLOSEST MEANING: Traditional costumes from some countries are famous around the world.", options: ["ordinary", "regular", "normal", "well-known"], correctAnswer: "well-known" },
      { id: 17, type: QuestionType.MULTIPLE_CHOICE, text: "CLOSEST MEANING: People used carrier pigeons to deliver messages in the past.", options: ["retain", "send", "capture", "receive"], correctAnswer: "send" },
      { id: 18, type: QuestionType.MULTIPLE_CHOICE, text: "OPPOSITE MEANING: Today, people usually get around by cars, buses or motorbikes.", options: ["go over", "go around", "stay in", "get in"], correctAnswer: "stay in" },
      { id: 19, type: QuestionType.MULTIPLE_CHOICE, text: "OPPOSITE MEANING: In the past, most things were really different.", options: ["similar", "unusual", "strange", "varied"], correctAnswer: "similar" },
      { id: 20, type: QuestionType.WORD_FORM, text: "I have some ____________ friends whom I can rely on when things go wrong. (SUPPORT)", correctAnswer: "supportive", options: ["support", "supporting", "supportive", "supported"] },
      { id: 21, type: QuestionType.WORD_FORM, text: "It is ____________ to ride a horse around on the street today. (USUALLY)", correctAnswer: "unusual", options: ["usual", "usually", "unusual", "unusually"] },
      { id: 22, type: QuestionType.WORD_FORM, text: "They are not very ____________. They rarely talk to anyone. (COMMUNICATE)", correctAnswer: "communicative", options: ["communicate", "communicating", "communicative", "communication"] },
      { id: 23, type: QuestionType.WORD_FORM, text: "People usually dress ____________ on special occasions. (TRADITION)", correctAnswer: "traditionally", options: ["traditional", "traditionally", "tradition", "traditions"] },
      { id: 24, type: QuestionType.WORD_FORM, text: "The fact that fewer and fewer people use radio today leads to the ____________ of this means of communication. (POPULAR)", correctAnswer: "unpopularity", options: ["popular", "popularity", "unpopular", "unpopularity"] },
      { id: 25, type: QuestionType.ERROR_RECOGNITION, text: "Lisa was going home when she meets her new English teacher at the corner of the street. (Find error)", options: ["going", "when", "meets", "corner"], correctAnswer: "meets" },
      { id: 26, type: QuestionType.ERROR_RECOGNITION, text: "My friend’s parents wishes they could afford to buy a new television. (Find error)", options: ["friend's", "wishes", "afford", "new"], correctAnswer: "wishes" },
      { id: 27, type: QuestionType.ERROR_RECOGNITION, text: "She loves updating her Facebook status every day, but she doesn’t write anything today. (Find error)", options: ["updating", "every day", "doesn't write", "today"], correctAnswer: "doesn't write" },
      { id: 28, type: QuestionType.WRITING, text: "Louis spends too much time surfing the Internet every day, which he doesn’t like. (WISH)\nRewrite: Louis __________________________.", correctAnswer: "wishes he didn't spend too much time surfing the Internet every day" },
      { id: 29, type: QuestionType.WRITING, text: "People wrote about their daily lives in a diary 40 years ago. (USED)\nRewrite: People __________________________.", correctAnswer: "used to write about their daily lives in a diary 40 years ago" },
      { id: 30, type: QuestionType.WRITING, text: "People don’t want to use carrier pigeons these days because they have become inconvenient. (REFUSE)\nRewrite: People __________________________.", correctAnswer: "refuse to use carrier pigeons these days because they have become inconvenient" },
      { id: 31, type: QuestionType.WRITING, text: "Tony and Ben were playing in the garden and their mom was cooking at 3 p.m. yesterday. (WHILE)\nRewrite: Tony and Ben __________________________.", correctAnswer: "were playing in the garden while their mom was cooking at 3 p.m. yesterday" },
      { id: 32, type: QuestionType.WRITING, text: "Make sentence: People / share / information / their lives / social media / by / post / new entries /.", correctAnswer: "People share information about their lives on social media by posting new entries." },
      { id: 33, type: QuestionType.WRITING, text: "Make sentence: Jennie / wish / had / own laptop / look / information / when / need /.", correctAnswer: "Jennie wishes she had her own laptop to look for information when she needs it." },
      { id: 34, type: QuestionType.WRITING, text: "Order words: common / extended / it / In / generations / household / the past, / an / three or more / family / was / lived / a / in / with / that /.", correctAnswer: "In the past, it was common that three or more generations lived in an extended family household." },
      { id: 35, type: QuestionType.WRITING, text: "Order words: how to / old / women / raise / teach / home / In the / well / stayed / to / behave / them / and / children / days, /.", correctAnswer: "In the old days, women stayed home to raise children and teach them how to behave well." }
    ]
  },
  {
    id: 2,
    title: "Unit 2: Natural Wonders & Travel",
    vocab: [
      { word: "Mount Everest", transcription: "/maʊnt ˈɛvərɪst/", definition: "(phr): đỉnh Everest" },
      { word: "natural wonder", transcription: "/ˈnæʧᵊrᵊl ˈwʌndə/", definition: "(phr): kì quan thiên nhiên" },
      { word: "Parícutin Volcano", transcription: "/pɑːricutɪn vɒlˈkeɪnəʊ/", definition: "(phr): núi lửa Parícutin" },
      { word: "the Grand Canyon", transcription: "/ðə ɡrænd ˈkænjən/", definition: "(phr): hẻm núi lớn Grand Canyon" },
      { word: "the Great Barrier Reef", transcription: "/ðə ɡreɪt ˈbæriə riːf/", definition: "(phr): rạn san hô Great Barrier" },
      { word: "the Harbour of Rio de Janeiro", transcription: "/ðə ˈhɑːbər ɒv ˈriːəʊ diː ʤəˈnɪərəʊ/", definition: "(phr): cảng Rio de Janeiro" },
      { word: "the Northern Lights", transcription: "/ðə ˈnɔːðᵊn laɪts/", definition: "(phr): Bắc cực quang" },
      { word: "Victoria Falls", transcription: "/vɪkˈtɔːriə fɔːlz/", definition: "(phr): thác nước Victoria" },
      { word: "the Arctic Circle", transcription: "/ði ˈɑːktɪk ˈsɜːkᵊl/", definition: "(n): Vòng Bắc Cực" },
      { word: "carve", transcription: "/kɑːv/", definition: "(v): khắc, tạc, đục" },
      { word: "carving", transcription: "/ˈkɑː.vɪŋ/", definition: "(n): hình chạm khắc, phù điêu" },
      { word: "charged particle", transcription: "/ʧɑːʤd ˈpɑːtɪkᵊl/", definition: "(phr): hạt/phần tử tích điện" },
      { word: "formation", transcription: "/fɔːˈmeɪʃᵊn/", definition: "(n): sự hình thành" },
      { word: "grand", transcription: "/ɡrænd/", definition: "(adj): to lớn, hùng vĩ" },
      { word: "interact", transcription: "/ˌɪntərˈækt/", definition: "(v): tương tác" },
      { word: "interactive", transcription: "/ˌɪntəˈræktɪv/", definition: "(adj): có tính tương tác" },
      { word: "magnetic field", transcription: "/mæɡˈnɛtɪk fiːld/", definition: "(n): từ trường" },
      { word: "massive", transcription: "/ˈmæsɪv/", definition: "(adj): to lớn, đồ sộ" },
      { word: "outstanding", transcription: "/aʊtˈstændɪŋ/", definition: "(adj): nổi bật, xuất sắc" },
      { word: "process", transcription: "/ˈprəʊsɛs/", definition: "(n): quá trình" },
      { word: "stretch", transcription: "/strɛʧ/", definition: "(v): trải dài ra" },
      { word: "accommodation", transcription: "/əˌkɒməˈdeɪʃᵊn/", definition: "(n): chỗ trọ, chỗ ở" },
      { word: "destination", transcription: "/ˌdɛstɪˈneɪʃᵊn/", definition: "(n): điểm đến" },
      { word: "guesthouse", transcription: "/ˈɡɛsthaʊs/", definition: "(n): nhà khách, nhà nghỉ" },
      { word: "guided tour", transcription: "/ˈɡaɪdɪd tʊə/", definition: "(phr): chuyến tham quan có hướng dẫn viên" },
      { word: "hotel facilities", transcription: "/həʊˈtɛl fəˈsɪlətiz/", definition: "(phr): tiện nghi của khách sạn" },
      { word: "package holiday", transcription: "/ˈpækɪʤ ˈhɒlədeɪ/", definition: "(n): kì nghỉ trọn gói" },
      { word: "tour guide", transcription: "/tʊə ɡaɪd/", definition: "(n): hướng dẫn viên du lịch" },
      { word: "travel agent", transcription: "/ˈtrævᵊl ˈeɪʤᵊnt/", definition: "(n): đại lí du lịch" },
      { word: "adventure holiday", transcription: "/ədˈvɛnʧə ˈhɒlədeɪ/", definition: "(phr): kì nghỉ thám hiểm" },
      { word: "affordable", transcription: "/əˈfɔːdəbᵊl/", definition: "(adj): có thể chi trả, phải chăng" },
      { word: "afford", transcription: "/əˈfɔːd/", definition: "(v): có thể mua được" },
      { word: "beach holiday", transcription: "/biːʧ ˈhɒlədeɪ/", definition: "(phr): kì nghỉ ở biển" },
      { word: "bungalow", transcription: "/ˈbʌŋɡələʊ/", definition: "(n): nhà gỗ một tầng" },
      { word: "camping holiday", transcription: "/ˈkæmpɪŋ ˈhɒlədeɪ/", definition: "(phr): kì nghỉ cắm trại" },
      { word: "city break", transcription: "/ˈsɪti breɪk/", definition: "(phr): kì nghỉ ngắn ngày trong thành phố" },
      { word: "cruise", transcription: "/kruːz/", definition: "(n/v): chuyến du thuyền" },
      { word: "gorgeous", transcription: "/ˈɡɔːʤəs/", definition: "(adj): tráng lệ, lộng lẫy" },
      { word: "jungle", transcription: "/ˈʤʌŋɡᵊl/", definition: "(n): rừng nhiệt đới" },
      { word: "meditate", transcription: "/ˈmɛdɪteɪt/", definition: "(v): thiền" },
      { word: "meditation", transcription: "/ˌmɛdɪˈteɪʃᵊn/", definition: "(n): việc thiền định" },
      { word: "safari", transcription: "/səˈfɑːri/", definition: "(n): chuyến tham quan ngắm động vật hoang dã" },
      { word: "scuba diving", transcription: "/ˈskuːbə ˈdaɪvɪŋ/", definition: "(n): lặn dùng bình dưỡng khí" },
      { word: "sightseeing holiday", transcription: "/ˈsaɪtˌsiːɪŋ ˈhɒlədeɪ/", definition: "(phr): kì nghỉ tham quan" },
      { word: "snorkelling", transcription: "/ˈsnɔːkᵊlɪŋ/", definition: "(n): lặn dùng ống thở" },
      { word: "snorkel", transcription: "/ˈsnɔːkᵊl/", definition: "(v): lặn dùng ống thở" },
      { word: "tropical", transcription: "/ˈtrɒpɪkᵊl/", definition: "(adj): nhiệt đới" },
      { word: "unique", transcription: "/juːˈniːk/", definition: "(adj): duy nhất, độc nhất" },
      { word: "uniqueness", transcription: "/juːˈniːknəs/", definition: "(n): sự độc đáo" },
      { word: "volunteer holiday", transcription: "/ˌvɒlənˈtɪə ˈhɒlədeɪ/", definition: "(phr): kì nghỉ thiện nguyện" },
      { word: "waterfall", transcription: "/ˈwɔːtəfɔːl/", definition: "(n): thác nước" },
      { word: "charming", transcription: "/ˈʧɑːmɪŋ/", definition: "(adj): duyên dáng, thu hút" },
      { word: "charm", transcription: "/ʧɑːm/", definition: "(n/v): sự duyên dáng, thu hút" },
      { word: "construction", transcription: "/kənˈstrʌkʃᵊn/", definition: "(n): sự xây dựng" },
      { word: "construct", transcription: "/kənˈstrʌkt/", definition: "(v): xây dựng" },
      { word: "constructive", transcription: "/kənˈstrʌktɪv/", definition: "(adj): mang tính xây dựng" },
      { word: "habitat destruction", transcription: "/ˈhæbɪtæt dɪˈstrʌkʃᵊn/", definition: "(phr): sự phá huỷ môi trường sống" },
      { word: "law", transcription: "/lɔː/", definition: "(n): luật, điều lệ" },
      { word: "lawful", transcription: "/ˈlɔːfᵊl/", definition: "(adj): hợp pháp" },
      { word: "lawless", transcription: "/ˈlɔːləs/", definition: "(adj): không có luật pháp" },
      { word: "litter", transcription: "/ˈlɪtə/", definition: "(v): xả rác" },
      { word: "littering", transcription: "/ˈlɪtərɪŋ/", definition: "(n): hành động xả rác" },
      { word: "raise awareness", transcription: "/reɪz əˈweənəs/", definition: "(phr): nâng cao nhận thức" },
      { word: "soil erosion", transcription: "/sɔɪl ɪˈrəʊʒᵊn/", definition: "(phr): sự xói mòn đất" },
      { word: "tourism", transcription: "/ˈtʊərɪzᵊm/", definition: "(n): ngành du lịch" },
      { word: "tourist", transcription: "/ˈtʊərɪst/", definition: "(n): khách du lịch" },
      { word: "touristy", transcription: "/tʊəˈrɪsti/", definition: "(adj): đông khách du lịch" },
      { word: "waste", transcription: "/weɪst/", definition: "(n/v): rác thải, lãng phí" },
      { word: "wasteful", transcription: "/ˈweɪstfᵊl/", definition: "(adj): phung phí" }
    ],
    grammar: [
      {
        title: "Infinitives (Động từ nguyên thể)",
        content: `**To-infinitive (V nguyên mẫu có to)**
• Sau các động từ: **agree, decide, hope, promise, want, need, accept, refuse, plan**.
  - Ex: They decided **to go** to Thailand together.
• Sau **would love** và **would like**.
  - Ex: James would love **to visit** new places.
• Để diễn đạt mục đích (purpose).
  - Ex: We waited for the bus **to take** us on a sightseeing tour.
• Sau **it + be + tính từ** (adj).
  - Ex: It is difficult **to finish** a long hike.

**Bare infinitive (V nguyên mẫu không to)**
• Sau động từ khiếm khuyết (**can, must, should**...).
  - Ex: We **can see** the Great Barrier Reef from space.
• Sau **let** và **make**.
  - Ex: The teacher **let us go**... / The teacher **made us set** up the tents.
• Sau **had better**.
  - Ex: You **had better book** your holiday early.

**Lưu ý (Note)**
• Phân biệt khi nào dùng **to-V** và **V-bare** rất quan trọng trong các bài thi.`
      },
      {
        title: "-ing forms (Danh động từ)",
        content: `**Cách sử dụng (Usage)**
• Như một chủ ngữ (Subject).
  - Ex: **Sightseeing** is a great way to experience a new place.
• Sau giới từ (Prepositions: about, in, at, of, without...).
  - Ex: He’s considering **going** on a beach holiday.
• Sau các động từ: **avoid, consider, suggest, deny, mind, spend** (time).
• Sau các động từ chỉ sở thích: **enjoy, like, love, prefer, fancy, hate, dislike**.
  - Ex: She **likes travelling** to tourist attractions.
• Sau **can’t help, can’t stand**.
  - Ex: I **can’t stand travelling** without making a stop.
• Sau **go** khi nói về các hoạt động (Go + Activity).
  - Ex: go **shopping**, go **swimming**, go **camping**.`
      },
      {
        title: "Wh- words before to-infinitives",
        content: `**Cách sử dụng**
• Dùng từ để hỏi (**who, what, where, when** hoặc **how**) trước **to-infinitive** để diễn tả một câu hỏi gián tiếp hoặc vấn đề cần giải quyết.

**Ví dụ**
• **who to contact**: liên hệ với ai.
  - Ex: She doesn’t know **who to contact** for information.
• **what to bring**: mang theo cái gì.
  - Ex: Did I tell you **what to bring** along?
• **where to find**: tìm ở đâu.
  - Ex: Can you tell me **where to find** a good hotel?
• **when to take**: khi nào thì đi.
  - Ex: I’m not sure **when to take** my holiday.
• **how to save**: cách tiết kiệm.
  - Ex: Chris wrote about **how to save** money.`
      },
      {
        title: "Too & Enough",
        content: `**Too (Quá... đến nỗi không thể)**
• Mang nghĩa tiêu cực (hơn mức cần thiết).
• Công thức: **too + tính từ + (for sb) + to-infinitive**
  - Ex: It’s **too dangerous** (for us) **to climb** Mount Everest.

**Enough (Đủ... để làm gì)**
• Mang nghĩa tích cực (đủ mức cần thiết).
• Công thức 1: **tính từ + enough + (for sb) + to-infinitive**
  - Ex: Jackson was **brave enough to experience** a bungee jump.
• Công thức 2: **enough + danh từ + (for sb) + to-infinitive**
  - Ex: We don’t have **enough time to visit** all places.
• Dạng phủ định: **not + adj + enough**
  - Ex: The hotel is **not clean enough** to stay at.`
      }
    ],
    practice: [
      { id: 1, type: QuestionType.MULTIPLE_CHOICE, text: "PRONUNCIATION: Choose the word whose underlined part differs.\nA. mass__i__ve  B. charm__i__ng  C. safar__i__  D. charg__e__", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "Massive /æ/ vs /ɑː/ in others." },
      { id: 2, type: QuestionType.MULTIPLE_CHOICE, text: "PRONUNCIATION: Choose the word whose underlined part differs.\nA. afford__a__ble  B. Norther__n__  C. form__a__tion  D. c__a__nyon", options: ["A", "B", "C", "D"], correctAnswer: "D", explanation: "Canyon /æ/ vs /ɔː/ in others." },
      { id: 3, type: QuestionType.MULTIPLE_CHOICE, text: "PRONUNCIATION: Choose the word whose underlined part differs.\nA. t__ou__r  B. guesth__ou__se  C. m__ou__nt  D. bl__ou__se", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "Tour /ʊə/ vs /aʊ/ in others." },
      { id: 4, type: QuestionType.MULTIPLE_CHOICE, text: "STRESS: Choose the word with different stress position.\nA. outstanding  B. adventure  C. gorgeous  D. magnetic", options: ["A", "B", "C", "D"], correctAnswer: "C", explanation: "Gorgeous (1st) vs 2nd in others." },
      { id: 5, type: QuestionType.MULTIPLE_CHOICE, text: "STRESS: Choose the word with different stress position.\nA. massive  B. unique  C. Arctic  D. process", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "Unique (2nd) vs 1st in others." },
      { id: 6, type: QuestionType.MULTIPLE_CHOICE, text: "Would you like __________ on a break to the Italian countryside this summer holiday?", options: ["go", "goes", "going", "to go"], correctAnswer: "to go" },
      { id: 7, type: QuestionType.MULTIPLE_CHOICE, text: "You had better ___________ a notebook to write down all the new words you come across while you’re reading.", options: ["keeps", "keeping", "keep", "to keep"], correctAnswer: "keep" },
      { id: 8, type: QuestionType.MULTIPLE_CHOICE, text: "Charlies suggested ________ the holiday with the travel agent since they can save lots of time and money.", options: ["book", "booking", "books", "to book"], correctAnswer: "booking" },
      { id: 9, type: QuestionType.MULTIPLE_CHOICE, text: "I don’t know _______ to look for information about the New Seven Wonders of the World.", options: ["who", "what", "where", "why"], correctAnswer: "where" },
      { id: 10, type: QuestionType.MULTIPLE_CHOICE, text: "Nick: Hi, Flora. How was your summer? ... I visited Victoria Falls in Africa.\nNick: ______________________________", options: ["Did you visit your cousins?", "Was it in Africa?", "Where did you stay?", "Where did you go?"], correctAnswer: "Where did you go?" },
      { id: 11, type: QuestionType.MULTIPLE_CHOICE, text: "The cliffs were ___________ steep for us to climb without proper equipment.", options: ["too", "enough", "that", "so"], correctAnswer: "too" },
      { id: 12, type: QuestionType.MULTIPLE_CHOICE, text: "Some parents feel worried about their children’s safety, so sometimes they don’t let their sons or daughters ___________ on any school trips.", options: ["to go", "gone", "go", "going"], correctAnswer: "go" },
      { id: 13, type: QuestionType.MULTIPLE_CHOICE, text: "A: How long did you stay there?\nB: ________________________", options: ["Staying there was amazing.", "First, we decided to have a one-month break... shortened to 10 days.", "We visited that museum a long time ago.", "We didn't know how to get there."], correctAnswer: "First, we decided to have a one-month break but then we shortened the holiday to 10 days." },
      { id: 14, type: QuestionType.MULTIPLE_CHOICE, text: "People may not have ___________ to visit all of the famous places on their itineraries when they are on holiday.", options: ["enough time", "times enough", "a lot of times", "lots time"], correctAnswer: "enough time" },
      { id: 15, type: QuestionType.MULTIPLE_CHOICE, text: "The Northern Lights are so special because they _________ only near the Arctic Circle.", options: ["carve", "guide", "appear", "leave"], correctAnswer: "appear" },
      { id: 16, type: QuestionType.MULTIPLE_CHOICE, text: "CLOSEST MEANING: ...enjoy gorgeous sandy beaches...", options: ["ordinary", "ugly", "horrible", "attractive"], correctAnswer: "attractive" },
      { id: 17, type: QuestionType.MULTIPLE_CHOICE, text: "CLOSEST MEANING: ...range of accommodation types...", options: ["restaurant", "lodging", "landscape", "experience"], correctAnswer: "lodging" },
      { id: 18, type: QuestionType.MULTIPLE_CHOICE, text: "OPPOSITE MEANING: ...enjoy the unique opportunities...", options: ["special", "uncommon", "usual", "rare"], correctAnswer: "usual" },
      { id: 19, type: QuestionType.MULTIPLE_CHOICE, text: "OPPOSITE MEANING: ...offered some affordable tours...", options: ["costly", "cheap", "economical", "effective"], correctAnswer: "costly" },
      { id: 20, type: QuestionType.WORD_FORM, text: "We stayed in a very modern hotel with lots of ____________ last summer. (FACILITY)", correctAnswer: "facilities", options: ["facility", "facilitate", "facilities", "facilitation"] },
      { id: 21, type: QuestionType.WORD_FORM, text: "The ____________ for the exchange students... is a traditional Japanese house... (ACCOMMODATE)", correctAnswer: "accommodation", options: ["accommodate", "accommodation", "accommodating", "accommodated"] },
      { id: 22, type: QuestionType.WORD_FORM, text: "Ha Long Bay is one of the most beautiful tourist ____________ in the world. (ATTRACTIVE)", correctAnswer: "attractions", options: ["attract", "attractive", "attractively", "attractions"] },
      { id: 23, type: QuestionType.WORD_FORM, text: "The development of tourism can lead to wild animals’ habitat ____________. (DESTROY)", correctAnswer: "destruction", options: ["destroy", "destructive", "destruction", "destroyed"] },
      { id: 24, type: QuestionType.WORD_FORM, text: "A trip to Hoi An Ancient Town is definitely an ____________ experience. (FORGET)", correctAnswer: "unforgettable", options: ["forget", "forgettable", "unforgettable", "forgetful"] },
      { id: 25, type: QuestionType.ERROR_RECOGNITION, text: "The weather isn’t cool enough go on a mountain holiday. (Find error)", options: ["weather", "cool", "go", "holiday"], correctAnswer: "go" },
      { id: 26, type: QuestionType.ERROR_RECOGNITION, text: "We considered visit Victoria Falls this year to experience the beautiful nature. (Find error)", options: ["We", "visit", "experience", "nature"], correctAnswer: "visit" },
      { id: 27, type: QuestionType.ERROR_RECOGNITION, text: "When Tommy got lost... he didn’t know what can do. (Find error)", options: ["got", "crowded", "didn't", "can"], correctAnswer: "can" },
      { id: 28, type: QuestionType.WRITING, text: "Why don’t we go on a camping trip and stay in the tent for a week? (SUGGEST)\nRewrite: I __________________________.", correctAnswer: "suggest going on a camping trip and staying in the tent for a week" },
      { id: 29, type: QuestionType.WRITING, text: "The tour guide told us where we should ask about the tour information. (TO)\nRewrite: The tour guide told us __________________________.", correctAnswer: "where to ask about the tour information" },
      { id: 30, type: QuestionType.WRITING, text: "Lisa didn’t have enough energy to go trekking through the mountains. (TIRED)\nRewrite: Lisa was too __________________________.", correctAnswer: "tired to go trekking through the mountains" },
      { id: 31, type: QuestionType.WRITING, text: "The wind was too weak to cause any damage to the village on the top of the hill. (STRONG)\nRewrite: The wind was __________________________.", correctAnswer: "not strong enough to cause any damage to the village on the top of the hill" },
      { id: 32, type: QuestionType.WRITING, text: "Make sentence: The customer / ask / the travel agent / find / cheapest / holiday resort / him / last Monday /.", correctAnswer: "The customer asked the travel agent to find the cheapest holiday resort for him last Monday." },
      { id: 33, type: QuestionType.WRITING, text: "Make sentence: John / want / book / hotel room / his holiday / online / but / he / not know / how / do / it /.", correctAnswer: "John wants to book a hotel room for his holiday online but he does not know how to do it." },
      { id: 34, type: QuestionType.WRITING, text: "Order words: holiday / about / find / , please / Could / where / package / tell / Vietnam / me / you / information / the / the / to / in / ?", correctAnswer: "Could you tell me where to find information about the package holiday in Vietnam, please?" },
      { id: 35, type: QuestionType.WRITING, text: "Order words: top / dangerous / Parícutin Volcano / climb / too / it / is / of / the / us / for / to / to /.", correctAnswer: "It is too dangerous for us to climb to the top of Parícutin Volcano." }
    ]
  },
  {
    id: 3,
    title: "Unit 3: Healthy Lifestyle",
    vocab: [
      { word: "boost energy", transcription: "/buːst ˈɛnəʤi/", definition: "(phr): tăng cường năng lượng" },
      { word: "build relationships", transcription: "/bɪld rɪˈleɪʃᵊnʃɪps/", definition: "(phr): xây dựng các mối quan hệ" },
      { word: "get fit", transcription: "/ɡɛt fɪt/", definition: "(phr): có thân hình cân đối" },
      { word: "prevent diseases", transcription: "/prɪˈvɛnt dɪˈziːzɪz/", definition: "(phr): ngăn ngừa bệnh tật" },
      { word: "reduce stress", transcription: "/rɪˈdjuːs strɛs/", definition: "(phr): giảm căng thẳng" },
      { word: "strengthen body", transcription: "/ˈstrɛŋθᵊn ˈbɒdi/", definition: "(phr): tăng cường thể lực" },
      { word: "beneficial", transcription: "/ˌbɛnɪˈfɪʃᵊl/", definition: "(adj): có lợi, có ích" },
      { word: "benefit", transcription: "/ˈbɛnɪfɪt/", definition: "(n/v): lợi ích" },
      { word: "calorie", transcription: "/ˈkælᵊri/", definition: "(n): calo" },
      { word: "cancer", transcription: "/ˈkænsə/", definition: "(n): bệnh ung thư" },
      { word: "maintain", transcription: "/meɪnˈteɪn/", definition: "(v): duy trì" },
      { word: "mental health", transcription: "/ˈmɛntᵊl hɛlθ/", definition: "(n): sức khoẻ tinh thần" },
      { word: "muscle", transcription: "/ˈmʌsᵊl/", definition: "(n): cơ" },
      { word: "muscular", transcription: "/ˈmʌskjələ/", definition: "(adj): cơ bắp" },
      { word: "physical health", transcription: "/ˈfɪzɪkᵊl hɛlθ/", definition: "(n): sức khoẻ thể chất" },
      { word: "stress hormone", transcription: "/strɛs ˈhɔːməʊn/", definition: "(phr): hoóc môn gây căng thẳng" },
      { word: "work out", transcription: "/wɜːk aʊt/", definition: "(phr v): luyện tập thể dục/thể thao" },
      { word: "workout", transcription: "/ˈwɜːkaʊt/", definition: "(n): buổi/bài luyện tập thể dục/thể thao" },
      { word: "worth it", transcription: "/wɜːθ ɪt/", definition: "(idiom): xứng đáng" },
      { word: "be too stressed", transcription: "/biː tuː strɛst/", definition: "(phr): căng thẳng quá mức" },
      { word: "eat a balanced diet", transcription: "/iːt ə ˈbælənst ˈdaɪət/", definition: "(phr): ăn chế độ dinh dưỡng cân bằng" },
      { word: "eat too much junk food", transcription: "/iːt tuː mʌʧ ʤʌŋk fuːd/", definition: "(phr): ăn quá nhiều đồ ăn không tốt" },
      { word: "exercise", transcription: "/ˈɛksəsaɪz/", definition: "(v): tập thể dục" },
      { word: "get enough sleep", transcription: "/ɡɛt ɪˈnʌf sliːp/", definition: "(phr): ngủ đủ giấc" },
      { word: "have regular check-ups", transcription: "/hæv ˈrɛɡjələ ˈʧɛkˈʌps/", definition: "(phr): kiểm tra sức khoẻ đều đặn" },
      { word: "play sports", transcription: "/pleɪ spɔːts/", definition: "(phr): chơi thể thao" },
      { word: "socialise", transcription: "/ˈsəʊʃᵊlaɪz/", definition: "(v): giao tiếp, xã giao" },
      { word: "social", transcription: "/ˈsəʊʃᵊl/", definition: "(adj): thuộc về giao tiếp" },
      { word: "sociable", transcription: "/ˈsəʊʃəbᵊl/", definition: "(adj): hoạt bát, thích giao thiệp" },
      { word: "stay up late", transcription: "/steɪ ʌp leɪt/", definition: "(phr): thức khuya" },
      { word: "surf the Internet for too long", transcription: "/sɜːf ði ˈɪntənɛt fɔː tuː lɒŋ/", definition: "(phr): lướt mạng quá lâu" },
      { word: "take up a hobby", transcription: "/teɪk ʌp ə ˈhɒbi/", definition: "(phr): bắt đầu một sở thích" },
      { word: "carbohydrate", transcription: "/ˈkɑːbəʊˈhaɪdreɪt/", definition: "(n): chất bột đường" },
      { word: "dairy products", transcription: "/ˈdeəri ˈprɒdʌkts/", definition: "(phr): các sản phẩm từ sữa" },
      { word: "digestive system", transcription: "/daɪˈʤɛstɪv ˈsɪstəm/", definition: "(n): hệ tiêu hoá" },
      { word: "fatty foods and drinks", transcription: "/ˈfæti fuːdz ænd drɪŋks/", definition: "(phr): thức ăn và đồ uống nhiều chất béo" },
      { word: "fruit and vegetables", transcription: "/fruːt ænd ˈvɛʤtəbᵊlz/", definition: "(phr): rau củ quả" },
      { word: "function", transcription: "/ˈfʌŋkʃᵊn/", definition: "(n): chức năng" },
      { word: "functional", transcription: "/ˈfʌŋkʃᵊnᵊl/", definition: "(adj): hoạt động tốt" },
      { word: "glucose", transcription: "/ˈɡluːkəʊs/", definition: "(n): đường đơn" },
      { word: "joint", transcription: "/ʤɔɪnt/", definition: "(n): khớp (xương)" },
      { word: "mineral", transcription: "/ˈmɪnᵊrᵊl/", definition: "(n): chất khoáng" },
      { word: "nutrient", transcription: "/ˈnjuːtriənt/", definition: "(n): chất dinh dưỡng" },
      { word: "nutritious", transcription: "/njuːˈtrɪʃəs/", definition: "(adj): nhiều dinh dưỡng" },
      { word: "nutrition", transcription: "/njuːˈtrɪʃᵊn/", definition: "(n): dinh dưỡng" },
      { word: "protein", transcription: "/ˈprəʊtiːn/", definition: "(n): chất đạm" },
      { word: "starchy foods", transcription: "/ˈstɑːʧi fuːdz/", definition: "(phr): thức ăn giàu tinh bột" },
      { word: "sugary foods and drinks", transcription: "/ˈʃʊɡᵊri fuːdz ænd drɪŋks/", definition: "(phr): thức ăn đồ uống có đường" },
      { word: "sweat", transcription: "/swɛt/", definition: "(n/v): mồ hôi, đổ mồ hôi" },
      { word: "sweaty", transcription: "/ˈswɛti/", definition: "(adj): mồ hôi nhễ nhại" },
      { word: "urine", transcription: "/ˈjʊərɪn/", definition: "(n): nước tiểu" }
    ],
    grammar: [
      {
        title: "Modals (Động từ khiếm khuyết)",
        content: `**Possibility (Khả năng xảy ra)**
• **can/could/may/might**: Việc đó có thể xảy ra.
  - Ex: My gym membership card **might arrive** today.
  - Ex: We **can improve** our health by reducing stress.
• **Lưu ý**: 'Possibility' là cơ may xảy ra, còn 'Ability' là năng lực. Khi khả năng không cao, thường dùng **might**.

**Advice (Lời khuyên)**
• **should/shouldn’t**: Khuyên nên/không nên làm gì.
  - Ex: You **should spend** half an hour exercising.
  - Ex: You **shouldn’t eat** too much junk food.

**Obligation/Necessity (Nghĩa vụ/Sự cần thiết)**
• **must**: Cần thiết (xuất phát từ bản thân người nói).
  - Ex: I **must talk** to my doctor.
• **have to/had to**: Phải làm (do quy luật, quy định bên ngoài).
  - Ex: You **have to pay** for your membership.
• **don’t have to/didn’t have to**: Không cần thiết phải làm.
  - Ex: You **don’t have to exercise** every day to get fit.
• **mustn’t**: Không được phép (cấm đoán).
  - Ex: We **mustn’t leave** without cleaning the machines.

**Ability (Khả năng/Năng lực)**
• Hiện tại (Present): **can / be able to**.
  - Ex: She **can play** tennis well.
• Quá khứ (Past): **could / be able to**.
  - Ex: She **could swim** when she was five.
• Khả năng cụ thể trong quá khứ (Specific event): Dùng **was/were able to** (xoay sở làm được), không dùng **could**.
  - Ex: He had an injury, but he **was able to win** that match.`
      },
      {
        title: "Modals in First Conditional",
        content: `**Cách sử dụng**
• Sử dụng động từ khiếm khuyết (**must, can, could, may, might, should**) trong mệnh đề chính của câu điều kiện loại 1.

**Công thức**
• If + Hiện tại đơn, **Modal Verb** + V(nguyên mẫu)

**Ví dụ**
• If we want a healthy lifestyle, we **must have** a balanced diet.
• If you reduce sugar, you **can lose** weight.
• If you practise hard, you **could have** a chance to win.
• If you get hungry at night, you **should eat** apples.`
      },
      {
        title: "Phrasal Verbs (Cụm động từ)",
        content: `**Định nghĩa**
• Động từ + giới từ/trạng từ (tiểu từ). Mang nghĩa khác với động từ gốc.
  - Ex: I **work out** every day.

**Phân loại**
1. **Separable (Có thể tách rời)**
   • Tân ngữ là danh từ: đứng giữa hoặc sau.
     - **picked up** Aunt Helen / **picked** Aunt Helen **up**.
   • Tân ngữ là đại từ (me, him, it...): **BẮT BUỘC** đứng giữa.
     - **picked** me **up** (NOT: picked up me).

2. **Inseparable (Không thể tách rời)**
   • Tân ngữ luôn đứng sau giới từ.
     - **look after** him (NOT: look him after).

**Các cụm từ thường gặp**
• **give up**: từ bỏ
• **take up**: bắt đầu một sở thích
• **work out**: tập thể dục
• **look after**: chăm sóc
• **look for**: tìm kiếm
• **put off**: trì hoãn
• **call off**: huỷ bỏ`
      }
    ],
    practice: [
      { id: 1, type: QuestionType.MULTIPLE_CHOICE, text: "PRONUNCIATION: Choose the word whose underlined part differs.\nA. re__g__ular  B. mana__g__er  C. sur__g__eon  D. __g__ym", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "Regular /g/ vs /dʒ/ in others." },
      { id: 2, type: QuestionType.MULTIPLE_CHOICE, text: "PRONUNCIATION: Choose the word whose underlined part differs.\nA. starch__y__  B. sugar__y__  C. dair__y__  D. carboh__y__drate", options: ["A", "B", "C", "D"], correctAnswer: "D", explanation: "Carbohydrate /a:/ vs /eə/ or /i/." },
      { id: 3, type: QuestionType.MULTIPLE_CHOICE, text: "PRONUNCIATION: Choose the word whose underlined part differs.\nA. f__u__nction  B. n__u__trient  C. j__u__nk  D. m__u__scle", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "Nutrient /ju:/ vs /ʌ/ in others." },
      { id: 4, type: QuestionType.MULTIPLE_CHOICE, text: "STRESS: Choose the word with different stress position.\nA. workout  B. balanced  C. maintain  D. cancer", options: ["A", "B", "C", "D"], correctAnswer: "C", explanation: "Maintain (2nd) vs 1st in others." },
      { id: 5, type: QuestionType.MULTIPLE_CHOICE, text: "STRESS: Choose the word with different stress position.\nA. energy  B. digestive  C. physical  D. mineral", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "Digestive (2nd) vs 1st in others." },
      { id: 6, type: QuestionType.MULTIPLE_CHOICE, text: "Along with calcium, vitamin D is necessary for your bones as it _____bone mass and helps prevent osteoporosis.", options: ["maintained", "maintain", "maintaining", "maintains"], correctAnswer: "maintains" },
      { id: 7, type: QuestionType.MULTIPLE_CHOICE, text: "Don’t take a shower immediately after having a ________. You should wait for a few minutes...", options: ["hobby", "stress", "workout", "joint"], correctAnswer: "workout" },
      { id: 8, type: QuestionType.MULTIPLE_CHOICE, text: "My uncle Bill ________ play football when he was young. He was the best striker of the team then.", options: ["can", "could", "can't", "couldn't"], correctAnswer: "could" },
      { id: 9, type: QuestionType.MULTIPLE_CHOICE, text: "You should _______ yourself every day by having balanced meals, relaxing in your leisure time...", options: ["look for", "look after", "look up", "look out"], correctAnswer: "look after" },
      { id: 10, type: QuestionType.MULTIPLE_CHOICE, text: "A: I think I need to take a nap now. It’s a tiring day.\nB: ______________________________", options: ["Of course, you must be exhausted.", "You can work out more often.", "How much sleep do you have?", "If you stay up late..."], correctAnswer: "Of course, you must be exhausted after the mountain trip." },
      { id: 11, type: QuestionType.MULTIPLE_CHOICE, text: "You need to _________ the energy you take in with the energy you burn by a healthy diet.", options: ["balance", "boost", "get", "reduce"], correctAnswer: "balance" },
      { id: 12, type: QuestionType.MULTIPLE_CHOICE, text: "Wholegrain bread, rice, bread, potatoes, and other ________are among the five main food groups.", options: ["dairy products", "fruit and vegetables", "starchy foods", "junk food"], correctAnswer: "starchy foods" },
      { id: 13, type: QuestionType.MULTIPLE_CHOICE, text: "Student A: I saw some friends doing weight training... seemed easy.\nStudent B: ________________________", options: ["You're right...", "I don't think so. You should work with a professional...", "Thanks for the advice...", "Do you have any other tips?"], correctAnswer: "I don't think so. You should work with a professional physical therapist or a fitness specialist if you want to get started." },
      { id: 14, type: QuestionType.MULTIPLE_CHOICE, text: "The ___________ in our body breaks down carbohydrates into glucose.", options: ["digestive system", "joint", "mental health", "muscle"], correctAnswer: "digestive system" },
      { id: 15, type: QuestionType.MULTIPLE_CHOICE, text: "Protein should be included in all your meals as it is a vital ________for appetite and weight control.", options: ["hormone", "calorie", "food", "nutrient"], correctAnswer: "nutrient" },
      { id: 16, type: QuestionType.MULTIPLE_CHOICE, text: "CLOSEST MEANING: ...minerals in water that are beneficial to your body.", options: ["affordable", "social", "potential", "profitable"], correctAnswer: "profitable" },
      { id: 17, type: QuestionType.MULTIPLE_CHOICE, text: "CLOSEST MEANING: Mrs. Flint must have been too stressed...", options: ["unusual", "strained", "relaxed", "unstressed"], correctAnswer: "strained" },
      { id: 18, type: QuestionType.MULTIPLE_CHOICE, text: "OPPOSITE MEANING: ...offer various healthy choices with nutritious food.", options: ["unbalanced", "unstressed", "healthful", "unhealthy"], correctAnswer: "unhealthy" },
      { id: 19, type: QuestionType.MULTIPLE_CHOICE, text: "OPPOSITE MEANING: He has to maintain a healthy diet...", options: ["give up", "go on", "give away", "take up"], correctAnswer: "give up" },
      { id: 20, type: QuestionType.WORD_FORM, text: "Having a small cup of Greek yogurt regularly can ____________ your overall health... (BENEFICIAL)", correctAnswer: "benefit", options: ["benefit", "beneficial", "beneficially", "benefits"] },
      { id: 21, type: QuestionType.WORD_FORM, text: "Now you may feel ____________ better if you take time to relax and get some sleep. (MENTAL)", correctAnswer: "mentally", options: ["mental", "mentality", "mentally", "mentals"] },
      { id: 22, type: QuestionType.WORD_FORM, text: "You shouldn’t push yourself into a heavy workout, especially when you start feeling ____________ . (BREATH)", correctAnswer: "breathless", options: ["breath", "breathing", "breathless", "breathy"] },
      { id: 23, type: QuestionType.WORD_FORM, text: "Teenagers might have ____________ at night and feel severely tired during the day. (SLEEP)", correctAnswer: "sleeplessness", options: ["sleep", "asleep", "sleeplessness", "sleepy"] },
      { id: 24, type: QuestionType.WORD_FORM, text: "My doctor suggested drinking less alcohol... to stay ____________ fit. (PHYSICAL)", correctAnswer: "physically", options: ["physical", "physique", "physically", "physics"] },
      { id: 25, type: QuestionType.ERROR_RECOGNITION, text: "My mom usually makes lunch boxes... to make sure of my balancing diet. (Find error)", options: ["makes", "me", "sure", "balancing"], correctAnswer: "balancing" },
      { id: 26, type: QuestionType.ERROR_RECOGNITION, text: "Working out may be quite difficult... but the payoff is worthy it. (Find error)", options: ["Working", "difficult", "first", "worthy"], correctAnswer: "worthy" },
      { id: 27, type: QuestionType.ERROR_RECOGNITION, text: "Some of my friends are always too busy... to socialised during the week. (Find error)", options: ["Some", "with", "socialised", "during"], correctAnswer: "socialised" },
      { id: 28, type: QuestionType.WRITING, text: "They organised the Huế English Speaking Competition last December. (TOOK PLACE)\nRewrite: __________________________.", correctAnswer: "The Huế English Speaking Competition took place last December" },
      { id: 29, type: QuestionType.WRITING, text: "Although Jenny had a stomach ache last Friday, she managed to finish the Math test. (ALTHOUGH, ABLE)\nRewrite: __________________________.", correctAnswer: "Although Jenny had a stomach ache last Friday, she was able to finish the Math test" },
      { id: 30, type: QuestionType.WRITING, text: "Gwen wants to stay hydrated during the workout. It’s possible for her to drink some water after every 15-20 minutes... (CAN, IF)\nRewrite: __________________________.", correctAnswer: "If Gwen wants to stay hydrated during the workout, she can drink some water after every 15-20 minutes of exercise" },
      { id: 31, type: QuestionType.WRITING, text: "Andy wants to stay safe at the gym. It’s necessary for him to follow these safety instructions... (SHOULD, IF)\nRewrite: __________________________.", correctAnswer: "If Andy wants to stay safe at the gym, he should follow these safety instructions during his workout" },
      { id: 32, type: QuestionType.WRITING, text: "Make sentence: I / usually / go home / bus / , / but / my mom and dad / pick me up / from school / yesterday / give me / a / surprise / birthday present /.", correctAnswer: "I usually go home by bus, but my mom and dad picked me up from school yesterday to give me a surprise birthday present." },
      { id: 33, type: QuestionType.WRITING, text: "Make sentence: If / teenagers / place / high priority / sleep / night /, they / will / feel / more energetic and alert / next morning.", correctAnswer: "If teenagers place a high priority on sleep at night, they will feel more energetic and alert the next morning." },
      { id: 34, type: QuestionType.WRITING, text: "Order words: leafy vegetables and nuts / balanced / relying / should / too much / eat / a / diet / to get / nutrients / rather than / on / meat and dairy products / vital / with / We /.", correctAnswer: "We should eat a balanced diet with leafy vegetables and nuts to get vital nutrients rather than relying too much on meat and dairy products." },
      { id: 35, type: QuestionType.WRITING, text: "Order words: You / foods and drinks / having smaller meals / the energy / by eating a balanced diet / with / healthy / and / reduce / throughout the day / consumed /can /.", correctAnswer: "You can reduce the energy consumed by eating a balanced diet with healthy foods and drinks and having smaller meals throughout the day." }
    ]
  }
];