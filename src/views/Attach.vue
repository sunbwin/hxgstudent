<template>
  <div class="attach-container">

    <div class="content-wrapper">
      <!-- 教学评估与学生发展框架 -->
      <div v-if="contentKey === 'evaluation_framework'">
        <section class="section">
          <h2 class="section-title">第一部分：我们的评估体系：如何科学地测量学生能力</h2>

          <div class="sub-section">
            <h3 class="sub-title">1.1 评估体系的标准化解释</h3>
            <p class="description">
              我们评估体系的“标准化”核心在于：确保每一次评估都使用同一把“标尺”，来衡量每一位学生的具体行为。这杜绝了主观臆断，使得分数具备了公平性和可比性。
            </p>
            <ul class="standard-list">
              <li>
                **统一的评估框架**：无论是评估何种学习习惯，我们都采用统一的【理解 -> 掌握 -> 运用 -> 分享】四层能力框架进行评判，确保了评估逻辑的一致性。
              </li>
              <li>
                **明确的行为锚点**：每一个分数都与一个具体的、可观察的行为表现相“锚定”。例如，在“每日三反思”的评估中，低分行为（“回答宽泛”）和高分行为（“能具体说出错误并提出改进方法”）有明确的定义。
              </li>
              <li>
                **一致的评估流程**：评估遵循严格的“观察-比对-打分”流程，确保了评估结果的客观性和可靠性。
              </li>
            </ul>
          </div>

          <div class="sub-section">
            <h3 class="sub-title">1.2 学习习惯掌握度评估标准 (四维度独立评分)</h3>
            <p class="description">
              我们使用以下表格来评估学生对任一学习方法（如“每日三反思”）的掌握深度：
            </p>
            <div class="score-card">
              <h4>维度一：理解 (考察认知深度)</h4>
              <table>
                <thead>
                <tr>
                  <th>分数</th>
                  <th>等级</th>
                  <th>对应的具体行为表现</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1-4分</td>
                  <td>基础认知</td>
                  <td>学生能回忆起该学习方法的名字，但对具体步骤和目的说不清楚。</td>
                </tr>
                <tr>
                  <td>5-7分</td>
                  <td>部分理解</td>
                  <td>学生能回忆起方法的关键步骤，但在被问到“为什么这么做”或“这么做有什么好处”时，需要老师或家长的引导和提示才能回答。</td>
                </tr>
                <tr>
                  <td>8-10分</td>
                  <td>深刻理解</td>
                  <td>学生无需引导，即可独立、准确地阐述该方法的具体步骤、核心目的以及它能解决什么问题。</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div class="score-card">
              <h4>维度二：掌握 (考察操作准确度)</h4>
              <table>
                <thead>
                <tr>
                  <th>分数</th>
                  <th>等级</th>
                  <th>对应的具体行为表现</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1-4分</td>
                  <td>初步尝试</td>
                  <td>学生在尝试使用该方法时，需要一步步的详细指导，否则容易出错或遗漏关键环节。</td>
                </tr>
                <tr>
                  <td>5-7分</td>
                  <td>基本掌握</td>
                  <td>学生能在一般性指导下，相对完整地执行该方法，但产出的结果可能较为笼统或存在一些细节瑕疵。</td>
                </tr>
                <tr>
                  <td>8-10分</td>
                  <td>熟练掌握</td>
                  <td>学生能独立、准确地运用该方法完成标准任务，过程流畅，结果可靠。</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div class="score-card">
              <h4>维度三：运用 (考察使用自主性)</h4>
              <table>
                <thead>
                <tr>
                  <th>分数</th>
                  <th>等级</th>
                  <th>对应的具体行为表现</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1-4分</td>
                  <td>被动运用</td>
                  <td>只有当被明确指令“请用XX方法完成这个任务”时，学生才会使用。</td>
                </tr>
                <tr>
                  <td>5-7分</td>
                  <td>提示下运用</td>
                  <td>在遇到相关问题时，经过老师或家长的一般性提醒（例如“想想我们学过的好方法”），学生能够想起来并使用该方法。</td>
                </tr>
                <tr>
                  <td>8-10分</td>
                  <td>主动运用</td>
                  <td>无需任何提醒，学生在遇到合适的学习场景时，会自主、主动地选择并使用该方法，已初步形成习惯。</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div class="score-card">
              <h4>维度四：分享 (考察迁移和传授能力)</h4>
              <table>
                <thead>
                <tr>
                  <th>分数</th>
                  <th>等级</th>
                  <th>对应的具体行为表现</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1-4分</td>
                  <td>简单应答</td>
                  <td>当被问及时，能用一两句话简单描述该方法是什么。</td>
                </tr>
                <tr>
                  <td>5-7分</td>
                  <td>清晰陈述</td>
                  <td>当被问及时，能清晰、有条理地向他人介绍该方法的具体步骤和做法。</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section class="section">
          <h2 class="section-title">第二部分：我们的科学依据：评估体系的理论支撑</h2>
          <p class="description">
            我们这套详细、标准化的评估系统并非凭空创造，而是建立在经典的教育科学理论基础之上。
          </p>
          <ul class="theory-list">
            <li>
              **布鲁姆认知目标分类学 (Bloom's Taxonomy)**：我们的【理解 -> 掌握 -> 运用 -> 分享】维度，精准对应了布鲁姆理论中从“记忆、理解”到“应用”再到“分析、创造”的认知层次递进关系。“分享”作为最高层级，是被公认的掌握知识的最高境界。
            </li>
            <li>
              **德雷福斯技能习得模型 (Dreyfus Model of Skill Acquisition)**：我们的评估维度也符合该模型从“新手”（需要规则和指导）到“专家”（依赖直觉和本能）的技能发展路径。“运用”和“分享”阶段，正是一个学生将学习方法内化为学习本能的过程。
            </li>
            <li>
              **维果茨基“最近发展区”理论 (Vygotsky's ZPD)**：我们的四维度评分体系，本质上就是一个精准定位学生“最近发展区”的诊断工具。例如，一个学生在“掌握”维度得分很高（在帮助下能完成），但在“运用”维度得分很低（无法独立完成），这恰好说明“提升运用的自主性”就是他下一步最需要学习和突破的区域。
            </li>
          </ul>
        </section>
        <section class="section">
          <h2 class="section-title">第三部分：我们的教育哲学：“螺旋式成长引擎”模型</h2>

          <div class="sub-section">
            <h3 class="sub-title">3.1 核心理念与内在引擎</h3>
            <p class="description">
              我们认为，真正的成长来源于知识、思维、行为三者之间不断循环、相互增强的动态过程。这个“铁三角”如同一个飞轮，一旦启动，就会产生强大的自我驱动力，让学生的成长不断加速，最终将学习内化为一种本能。
            </p>
            <ul class="engine-list">
              <li>**知识储备**：是成长的“燃料”。</li>
              <li>**思维品质**：是成长的“燃烧室”，决定了知识的利用率。</li>
              <li>**行为习惯**：是成长的“传动带”，将思维洞见固化为稳定能力，并反哺知识的获取。</li>
            </ul>
          </div>
          <div class="sub-section">
            <h3 class="sub-title">3.2 模型的六大关键支柱</h3>
            <p class="description">
              为了点燃并加速这个“成长引擎”，我们的课程体系聚焦于六大关键支柱，它们是驱动学生实现螺旋式成长的核心能力：
            </p>
            <ul class="pillar-list">
              <li>**思维的“处理器”**：【逻辑】与【批判】</li>
              <li>**成长的“加速器”**：【学习】与【持续改进】</li>
              <li>**知识的“链接器”**：【知识储备】与【沟通】</li>
            </ul>
          </div>
        </section>
      </div>

      <!-- 排课的理论依据 -->
      <div v-else-if="contentKey === 'why_schedule'">
        <section class="section">
          <h2 class="section-title">排课的理论依据</h2>
          <div class="content-box">
            <p class="answer-text">
              排课的理论依据主要源于教育学、心理学和认知科学的研究，其核心目标是优化学生的学习效果和效率。以下是一些主要的理论基础：
            </p>
            <h3 class="sub-title">1. 认知负荷理论 (Cognitive Load Theory)</h3>
            <p class="answer-text">
              这一理论认为，人类的工作记忆是有限的。如果一堂课的信息量过大或过于复杂，就会导致认知负荷过高，学生难以有效处理和吸收知识。因此，科学的排课会控制每节课的信息密度，并合理安排课程顺序，以减轻学生的脑力疲劳。
            </p>
            <h3 class="sub-title">2. 学习曲线与遗忘曲线理论 (Learning Curve & Forgetting Curve)</h3>
            <p class="answer-text">
              学习曲线描述了随着时间推移，学习效果如何提升。而遗忘曲线则揭示了学习新知识后，如果不及时复习，知识的遗忘速度会非常快。基于此，排课会考虑时间间隔效应，将课程分散到一周的不同时间，并通过安排练习课来巩固知识。
            </p>
            <h3 class="sub-title">3. 注意力与疲劳管理 (Attention & Fatigue Management)</h3>
            <p class="answer-text">
              学生的注意力集中时间是有限的。通常，一节课的前15-20分钟是注意力最集中的时段。为了最大化学习效率，排课会设置合适的课程长度，并在关键时段安排重要课程。
            </p>
            <h3 class="sub-title">4. 知识结构与螺旋式上升理论 (Spiral Curriculum)</h3>
            <p class="answer-text">
              这一理论主张，应在不同年级和不同阶段重复学习同一主题，但每次都以更广、更深、更复杂的方式进行。这种排课模式有助于构建完整的知识体系，并加深学生对知识的理解与掌握。
            </p>
            <p class="answer-text last-p">
              通过综合运用这些理论，排课不仅是为了填充时间表，更是为了创建一个系统化的、符合学生认知规律的学习环境，从而最大化地促进知识的内化和技能的发展。
            </p>
          </div>
        </section>
      </div>

      <!-- 学生能力评估分数解读指南 -->
      <div v-else-if="contentKey === 'what_is_rating_framework'">
        <section class="section">
          <h2 class="section-title">【完整版】学生能力评估分数解读指南</h2>
          <p class="description">
            家长您好，
            这份报告中的分数不是简单的对错评判，而是一个成长的诊断工具。它旨在帮助我们共同了解孩子当前所处的能力发展阶段，并找到下一步最有效的提升路径。请使用本指南来解读您孩子的分数。
          </p>
          <div class="sub-section">
            <h3 class="sub-title">第一部分：如何解读“核心素养”分数 (1-10分制)</h3>
            <p class="answer-text">
              核心素养是决定孩子长期发展的底层能力。
            </p>
            <ul class="rating-list">
              <li>
                <h4 class="rating-subtitle">解读【批判性思维】分数</h4>
                <p>
                  如果孩子得分在 **1-4分 (基础期)**：这说明孩子能意识到问题的存在，但在分析原因时，倾向于简单归结为“粗心”，还不太会深入分析。
                </p>
                <p>
                  如果孩子得分在 **5-7分 (发展期)**：这是一个非常积极的信号！这说明孩子已经开始尝试对问题进行初步的、表层的归因分析。在我们的引导下，他会尝试从“知识点、审题、步骤”等角度找原因。
                </p>
                <p>
                  如果孩子得分在 **8-10分 (自主期)**：这是非常优秀的表现。这代表孩子已具备多角度、深层次的根本原因分析能力，并能提出自己独到的见解。
                </p>
              </li>
              <li>
                <h4 class="rating-subtitle">解读【持续改进】分数</h4>
                <p>
                  如果孩子得分在 **1-4分 (意愿期)**：这说明孩子内心有“想要改进”的意愿，但还没掌握将意愿转化为具体计划的方法。
                </p>
                <p>
                  如果孩子得分在 **5-7分 (计划期)**：孩子正在从“有意愿”向“有方法”转变。他已经能在我们的引导下，制定出初步的、具体的改进计划。
                </p>
                <p>
                  如果孩子得分在 **8-10分 (自主改进期)**：这代表孩子已具备很强的自我驱动力，能够自主、持续地进行自我优化，并能评估改进的效果。
                </p>
              </li>
              <li>
                <h4 class="rating-subtitle">解读【沟通表达】分数</h4>
                <p>
                  如果孩子得分在 **1-4分 (基础期)**：孩子能够进行基本的应答，但主动表达时，想法可能较为零散，缺乏条理。
                </p>
                <p>
                  如果孩子得分在 **5-7分 (发展期)**：孩子的表达清晰度和条理性有了很大进步，已经能够清晰、有条理地完成像“分享解题思路”这样的任务驱动型表达。
                </p>
                <p>
                  如果孩子得分在 **8-10分 (自信分享期)**：孩子的表达能力非常出色，不仅能清晰、有逻辑地表达，更能生动、富有感染力地分享自己的观点，甚至启发他人。
                </p>
              </li>
            </ul>
          </div>
          <div class="sub-section">
            <h3 class="sub-title">第二部分：如何解读“学习习惯掌握度”分数 (四维度独立评分)</h3>
            <p class="answer-text">
              这四个维度旨在剖析孩子对一个具体学习方法（如“每日三反思”）掌握的深度。
            </p>
            <ul class="rating-list">
              <li>
                <h4 class="rating-subtitle">“理解”分数代表：他懂不懂？</h4>
                <p>
                  **低分 (1-4分)** 意味着孩子能回忆起方法的名字，但对具体步骤和目的说不清楚。
                </p>
                <p>
                  **中等分数 (5-7分)** 意味着孩子能回忆起方法的关键步骤，但在被问到“为什么这么做”时，需要引导才能回答。
                </p>
                <p>
                  **高分 (8-10分)** 意味着他能无需引导，就独立、准确地阐述该方法的步骤和核心目的。
                </p>
              </li>
              <li>
                <h4 class="rating-subtitle">“掌握”分数代表：他会不会？</h4>
                <p>
                  **低分 (1-4分)** 意味着孩子在尝试时需要一步步的详细指导，否则容易出错。
                </p>
                <p>
                  **中等分数 (5-7分)** 意味着他能在一般性指导下，相对完整地执行该方法，但结果可能较为笼统。
                </p>
                <p>
                  **高分 (8-10分)** 意味着他能独立、准确地运用该方法完成任务，过程流畅可靠。
                </p>
              </li>
              <li>
                <h4 class="rating-subtitle">“运用”分数代表：他用不用？</h4>
                <p>
                  **低分 (1-4分)** 意味着他只有在被明确指令时才会使用，还没形成习惯。
                </p>
                <p>
                  **中等分数 (5-7分)** 意味着经过一般性提醒，他能够想起来并使用该方法。
                </p>
                <p>
                  **高分 (8-10分)** 意味着他已初步形成习惯，无需提醒就会在合适的场景自主使用。
                </p>
              </li>
              <li>
                <h4 class="rating-subtitle">“分享”分数代表：他通不通？</h4>
                <p>
                  **低分 (1-4分)** 意味着他只能用一两句话简单描述该方法。
                </p>
                <p>
                  **中等分数 (5-7分)** 意味着他能清晰、有条理地向他人介绍该方法的具体步骤和做法。
                </p>
                <p>
                  **高分 (8-10分)** 意味着他已将该方法完全内化，甚至能结合自己的案例去教会别人。
                </p>
              </li>
            </ul>
            <p class="answer-text last-p">
              **综合解读建议**：请将以上解读结合起来看，您将能清晰地看到孩子独特的优势领域和当前最需要支持的成长环节。我们的教学就将基于这个精准的诊断，为您的孩子提供最有效的个性化支持。
            </p>
          </div>
        </section>
      </div>

      <!-- 默认或未知内容 -->
      <div v-else>
        <p class="description text-center">请提供一个有效的内容键 (contentKey) 来显示相关内容。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const contentKey = ref('');

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const content = urlParams.get('content');
  if (content) {
    contentKey.value = content;
  } else {
    // 设置默认值
    contentKey.value = 'evaluation_framework';
  }
});

const goBack = () => {
  window.history.back();
};

const handleAttach = () => {
  // 这里的逻辑可以根据实际需求进行修改，例如发送一个事件或调用外部API
  alert("已确认并附加答案到文档。");
};
</script>

<style scoped>
.attach-container {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: #f8f9fa;
  color: #343a40;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1.25rem;
  color: #6c757d;
}

.content-wrapper {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 40px;
  width: 100%;
  max-width: 900px;
  line-height: 1.8;
}

.section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #495057;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 10px;
  margin-bottom: 25px;
}

.sub-section {
  margin-bottom: 30px;
}

.sub-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 15px;
}

.description, .answer-text {
  font-size: 1rem;
  color: #495057;
  margin-bottom: 20px;
  text-align: justify;
}

.standard-list, .theory-list, .engine-list, .pillar-list, .rating-list {
  padding-left: 20px;
  list-style-type: '👉 ';
  color: #6c757d;
}
.standard-list li, .theory-list li, .engine-list li, .pillar-list li, .rating-list li {
  margin-bottom: 12px;
}

.rating-list {
  list-style-type: none;
  padding-left: 0;
}

.rating-list li {
  border-left: 3px solid #6c757d;
  padding-left: 15px;
  margin-bottom: 25px;
}
.rating-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 10px;
}

.score-card {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  margin-top: 25px;
}

.score-card h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 15px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #e9ecef;
  padding: 12px 15px;
  text-align: left;
  font-size: 0.95rem;
}

thead th {
  background-color: #f1f3f5;
  color: #495057;
  font-weight: 600;
}

tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

.button-container {
  display: flex;
  gap: 16px;
  margin-top: 40px;
}

.back-button, .attach-button {
  padding: 12px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.back-button {
  background-color: #e9ecef;
  color: #495057;
}

.back-button:hover {
  background-color: #dee2e6;
}

.attach-button {
  background-color: #4c66f7;
  color: #ffffff;
}

.attach-button:hover {
  background-color: #364eaf;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.content-box h3 {
  margin-top: 25px;
}
</style>
