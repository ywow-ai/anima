<script lang="ts">
  import { onMount } from 'svelte';
  import { treaty } from '@elysiajs/eden';
  import type { App } from './api/[...slugs]/+server';
  import { page } from '$app/state';

  const { api } = treaty<App>(page.url.origin);

  onMount(() => {
    const f = async () => {
      try {
        const r = await api.index.get();
        const w = await api['test-secreet'].get();
        console.log(r, w);
      } catch (error) {
        console.error(error);
      }
    };

    f();
  });
</script>

<div class="fixed inset-0 flex">
  <aside class="bg-slate-950/60 border-r border-r-slate-800 h-full w-2/15 flex flex-col">
    <div class="flex px-3 py-2 h-14 items-center justify-between">
      <button
        type="button"
        aria-label="Sidebar Toggle"
        class="flex items-center justify-center aspect-square h-full hover:bg-slate-800 rounded-md"
      >
        <span class="icon-[lucide--panel-left] w-6 h-6"></span>
      </button>
      <button
        type="button"
        aria-label="Sidebar Toggle"
        class="flex items-center justify-center aspect-square h-full hover:bg-slate-800 rounded-md"
      >
        <span class="icon-[lucide--pencil-line] w-6 h-6"></span>
      </button>
    </div>
    <div class="flex px-3 py-2 flex-1 flex-col overflow-y-scroll">
      <ul>
        <li>
          <span class="flex px-2 py-1.5 text-[11px] font-semibold text-slate-500">CHAT HISTORY</span
          >
          <ul>
            {#each Array.from({ length: 20 }, (_, k) => k) as chat}
              <li>
                <a href="/" class="flex items-center px-2 py-1.5 hover:bg-slate-800 rounded-md"
                  >Chat {chat}</a
                >
              </li>
            {/each}
          </ul>
        </li>
      </ul>
    </div>
    <div class="flex px-3 py-2 h-14 items-center justify-between">
      <span class="flex px-2 py-1.5">another opt</span>
    </div>
  </aside>
  <main class="flex flex-col w-13/15">
    <header
      class="flex h-14 border-b border-b-slate-800 bg-slate-900 items-center justify-between px-3 py-2"
    >
      <button
        type="button"
        aria-label="Select Personality"
        class="flex items-center px-3 h-full hover:bg-slate-800 rounded-md"
      >
        select personality
      </button>
    </header>
    <div class="flex flex-1 flex-col overflow-y-scroll">
      <div class="w-[48rem] mx-auto bg-blue-400">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, veritatis explicabo
          tenetur officia rerum veniam quo quidem, suscipit est architecto recusandae, ducimus
          tempore reiciendis dolore autem? Aliquam voluptates deserunt totam vitae omnis
          voluptatibus iste tempore maxime excepturi inventore. Quibusdam, itaque nam! Illum rerum
          modi possimus perspiciatis rem accusantium, qui autem, earum incidunt corrupti excepturi
          amet voluptatem est vitae id, beatae voluptate quia esse non placeat. Quasi repudiandae
          amet voluptas incidunt quas maiores labore, vero modi molestias obcaecati, in quo cumque
          commodi veritatis asperiores iure saepe aspernatur possimus! Quam, deleniti ipsam rem
          vitae numquam necessitatibus, voluptates tempora quod a eveniet explicabo! Blanditiis
          fugiat rerum deleniti placeat. Tenetur, deserunt nisi, necessitatibus, neque laborum animi
          aliquam odio corrupti ea in quis velit dolores perspiciatis. Recusandae saepe quos
          tempora. Dolorum amet quibusdam omnis nemo laborum possimus enim tempora illo non mollitia
          asperiores, sequi aperiam. Aspernatur amet consequuntur possimus commodi veniam,
          exercitationem alias quibusdam fuga perferendis eligendi magni minima dolore laborum
          sapiente, deleniti similique debitis quaerat est iste cum! Quam ullam deserunt vel cumque
          aut? Nesciunt, repellendus officiis, laboriosam autem quia voluptate libero dolorem
          reiciendis obcaecati, sunt nisi dolore molestias adipisci a quaerat facilis ducimus
          pariatur veritatis aliquid porro earum asperiores ut ea accusamus! Nemo adipisci dolorem,
          molestias autem quasi unde placeat magni delectus architecto possimus fugit. Reprehenderit
          natus non illo laudantium vero! Veritatis corrupti suscipit nostrum sequi ipsam.
          Voluptatibus, provident vitae! Deleniti reprehenderit ipsa quo adipisci maxime modi ea
          nulla. Culpa corporis nulla perferendis delectus adipisci iste magni, veritatis iure sequi
          excepturi animi est obcaecati accusamus mollitia quaerat sunt ullam. Blanditiis nihil
          itaque necessitatibus quibusdam, rerum placeat vel minima ullam earum architecto
          voluptates nam debitis id non, officiis unde ad dicta natus. Odit inventore dolor animi
          veniam placeat neque vel excepturi, culpa recusandae aspernatur necessitatibus velit amet
          voluptatibus maxime. Perspiciatis accusamus ipsam cupiditate architecto quibusdam!
          Incidunt ipsam consectetur magni dolor eum vel obcaecati porro nihil, excepturi eos quidem
          sapiente accusamus autem, nobis ratione nulla similique quaerat aut. Culpa illum fuga
          laborum! Enim eligendi officiis ut excepturi aliquam labore minima nihil vel officia
          sapiente quas sunt iure eius rem optio neque ea totam, facilis modi repellat? Incidunt,
          non soluta aliquam numquam necessitatibus inventore perspiciatis illum eos libero
          accusantium laudantium nihil repudiandae minima provident suscipit perferendis
          exercitationem labore beatae autem harum vitae iusto omnis aspernatur. At aperiam est
          exercitationem sequi, voluptates asperiores! Odio sunt ab voluptatum architecto mollitia
          delectus laudantium vel atque itaque repellendus tempora, repudiandae fugiat, cum sit
          asperiores earum ex quos magnam pariatur minima! Eligendi at debitis quo tenetur natus
          repudiandae unde nihil hic obcaecati. Repellendus suscipit ratione, sunt dolorum aut
          assumenda similique temporibus? Quaerat, optio sit? Quisquam rerum, adipisci dicta
          excepturi, repudiandae quae officia aspernatur amet ullam eius temporibus iusto similique
          iure consequatur molestiae mollitia voluptate quod veritatis, molestias natus neque
          perspiciatis enim impedit. Doloremque amet deleniti nisi quasi hic at minus, cupiditate
          beatae est aperiam ullam incidunt tempore vel officia deserunt porro. Accusantium
          necessitatibus, quam sed tenetur amet quas laborum libero vel suscipit dolorem deserunt
          quo fuga a maxime possimus cupiditate labore exercitationem? Mollitia corrupti sunt iste
          laboriosam dolor dicta officiis asperiores excepturi? Autem, exercitationem rerum! Omnis
          sunt ipsum odit sequi laborum illo quod corporis repudiandae! Recusandae, sapiente quasi
          amet quia accusamus accusantium optio officia consectetur nostrum, nesciunt natus. Magnam
          aliquam tenetur id dolores aperiam perspiciatis odio, harum, eos, optio natus iure
          suscipit error nam? Hic aut facilis ducimus atque. Ipsum, ipsam corporis dolor impedit ab
          placeat provident accusamus est eveniet odio ipsa facilis atque recusandae beatae
          exercitationem soluta praesentium deserunt consequatur ea rerum. Nemo tempora vero
          quibusdam repellendus? Quasi inventore adipisci accusantium voluptates tempora
          exercitationem laborum. Iste beatae magnam dolorum quasi, repellendus quibusdam architecto
          omnis molestiae officia accusamus assumenda consectetur cumque et harum quidem provident.
          Similique adipisci esse eaque suscipit quisquam aperiam dicta velit quasi ipsam quidem qui
          nesciunt itaque, corrupti commodi magni nemo laudantium aliquid quam autem minus
          voluptates impedit, amet non sit. Quo omnis voluptatibus, reiciendis fugiat ad magnam iure
          at illo, quaerat ab ullam voluptatum, temporibus nihil necessitatibus facere. Aliquid
          culpa laborum suscipit dicta ab quibusdam quas iure omnis necessitatibus doloremque fuga
          fugiat nam assumenda soluta, in temporibus reprehenderit deleniti? Aliquid laborum
          similique tempore placeat labore, numquam autem rem praesentium atque animi amet
          distinctio possimus quibusdam. Fuga dolorem aliquam animi porro molestias debitis
          reiciendis dolore magni. Rerum esse eum, doloremque, repudiandae consequuntur impedit
          labore illo officia numquam ipsum quos quidem similique. Veniam quisquam beatae quae
          accusantium ut maiores cumque minus voluptate, repudiandae in repellat laboriosam libero
          recusandae laborum ullam inventore deleniti, accusamus error dolorum quasi voluptates.
          Alias, veritatis inventore. Architecto quis itaque eius totam, sit suscipit asperiores
          sint iste. Velit sunt debitis repellat, nam error nihil, deserunt atque laborum porro, ea
          eaque tenetur tempore. Dignissimos amet delectus quidem voluptates rem minima similique
          modi quasi dolor tempore quas eaque culpa magni, eveniet repellat facere, aut inventore
          explicabo corporis! Laborum repudiandae nobis labore, incidunt dignissimos aspernatur,
          laudantium magnam nesciunt vitae nemo quae sunt aliquid doloremque fugit similique illum
          nostrum excepturi quos architecto delectus? Ullam quaerat dolor beatae quis facilis
          voluptate repellendus. Reprehenderit eum qui consequuntur id placeat hic, omnis dolores.
          Reprehenderit nemo vitae quod voluptate assumenda excepturi culpa rerum consectetur
          architecto exercitationem vel voluptatibus, laboriosam distinctio repellat adipisci odio
          labore maiores velit deleniti delectus! Nostrum eius ea, repellat ducimus distinctio
          laboriosam voluptatum natus animi, expedita modi est amet voluptatibus! Ipsum minima
          voluptate est, dicta rerum vel aut amet libero, veritatis praesentium dolor. Officiis
          dolorem eius iure ratione consequuntur rerum rem, incidunt eveniet adipisci architecto, et
          accusamus voluptates quisquam vel, tempore nesciunt. Harum consequatur minima earum qui
          labore, velit amet animi modi quae tenetur accusamus ipsam corporis sint, at consequuntur
          placeat ipsa, ut tempora nulla distinctio! Ea aliquid tempora non dolores natus, minus
          dolor rerum labore, iste quod voluptas dolorum eligendi facilis adipisci delectus tenetur
          sint quam vitae, temporibus sunt laudantium distinctio. Quis voluptatum accusamus beatae
          eum debitis impedit neque totam modi libero doloremque doloribus ipsum magni voluptate
          recusandae quisquam obcaecati deleniti quasi velit, odit cum. Eius, sequi. Ex totam
          provident quaerat maiores sed cupiditate nam, incidunt sapiente ad tempore distinctio
          mollitia odit quod atque ab ea libero. Quisquam cupiditate assumenda hic enim doloribus
          pariatur quaerat quibusdam porro voluptas ratione officiis sequi dolorem eligendi atque
          quia eaque commodi, nam ea eius. Rerum ea consequatur, quae magnam esse repudiandae non
          optio necessitatibus modi tempore expedita obcaecati amet maxime quasi enim voluptas.
          Corporis iusto explicabo labore accusamus ab sed nobis. Ullam ad adipisci repudiandae
          error unde eligendi facere. Officia excepturi vitae vero, eum tempore in magni quisquam
          eligendi? Voluptates magni voluptate reprehenderit saepe tenetur inventore, exercitationem
          numquam officiis qui expedita, nemo neque molestiae ab ullam est maiores possimus
          consectetur, quam mollitia explicabo! Error quod a saepe ex ab cupiditate sint unde,
          molestiae quos minima libero ipsa, sunt amet. Ullam labore, ipsam sed in esse quia
          cupiditate, expedita amet voluptatibus ducimus debitis non blanditiis quasi rerum odit quo
          ea! Quod labore ipsa magni non voluptates ratione, dolore at sequi minima, tenetur saepe
          laborum earum ut? Eaque nemo ex qui, aliquam accusamus dolores suscipit non, pariatur,
          exercitationem quod repudiandae error. Nostrum voluptate at illo earum, facere officiis
          quam. Repudiandae vero, libero laudantium nostrum nisi excepturi optio impedit doloremque
          adipisci exercitationem quia possimus in, vitae et consequatur animi laborum blanditiis
          facere aut est veritatis perspiciatis, ad suscipit fugit. Molestias possimus provident
          quam rerum vitae harum adipisci earum tempora optio, minus soluta accusamus fuga alias
          laboriosam animi nesciunt totam illum expedita dolorem perspiciatis labore? Quis illo
          similique nobis expedita unde, deleniti molestias. Facilis eaque fugiat odio eligendi eius
          pariatur harum, labore iste veniam nihil excepturi inventore! Dolores ratione voluptate
          fugiat voluptatibus, earum eaque sapiente. Corrupti similique excepturi sed tenetur esse
          quae, accusamus odio repellat officia nostrum voluptas itaque optio? Sint nam laborum,
          consequatur dolorem vitae esse rerum deleniti tempore assumenda exercitationem enim optio
          magni molestiae iusto quasi eligendi ullam! Perspiciatis repudiandae tempore, dicta nulla
          officiis nemo facilis, amet porro nostrum tenetur laudantium odit maxime animi beatae
          suscipit provident itaque ut! Modi, alias, nemo error veritatis quis quam suscipit illo
          deleniti accusamus non, aspernatur tempora labore! Dolorem odio sequi accusamus laborum
          velit fugiat quis, ad veritatis harum expedita similique consequuntur ipsam reprehenderit
          id dolores aspernatur debitis voluptatum fugit minima optio? Provident cumque nisi dolores
          magni exercitationem aspernatur laudantium fugit in. Id ea iure, repudiandae totam
          adipisci qui amet exercitationem incidunt repellendus veritatis sequi aspernatur voluptas,
          autem velit dolores similique delectus? Quo harum, tempore eius deserunt numquam
          blanditiis itaque similique dicta distinctio ex nesciunt, corrupti facere sapiente,
          dolorem eos autem? Hic accusantium distinctio expedita animi non iste, ex qui quos
          repudiandae dolores dolorum, obcaecati eaque cumque dolorem quo, sapiente optio reiciendis
          omnis officiis impedit dolor ducimus. Velit maxime sequi expedita officiis ab earum dolor,
          vitae ducimus reprehenderit laudantium suscipit atque at. Ipsam animi labore ipsum dolorem
          voluptates aspernatur. Ducimus unde tempora temporibus? Officiis deleniti ipsam illum ea
          quae atque dicta iusto, aspernatur quam voluptate sint. Doloremque unde ea deleniti
          voluptates perferendis tempore officia, reiciendis mollitia rem quod inventore ex
          dignissimos non ab culpa ad aliquid magni vero laboriosam quae reprehenderit ullam.
          Voluptas, facilis quo perspiciatis reiciendis nostrum autem voluptatibus sunt architecto
          blanditiis harum quibusdam tempora vitae, aperiam inventore. Nisi vel fugit architecto
          blanditiis optio aliquam nam fugiat magni molestias placeat sunt eligendi reiciendis
          ratione totam quas, sit consequuntur, molestiae, similique omnis? Cupiditate debitis
          corrupti velit quae. Suscipit, vel minima, distinctio maiores, libero magnam ab voluptates
          voluptatem officia mollitia odit culpa! Laborum quasi unde dolorem vero, veniam quis modi,
          atque doloribus maxime amet dolorum aperiam id illo voluptatem ut sit! Magnam aut ad
          reprehenderit nesciunt praesentium culpa est sequi sunt eligendi earum atque, iusto ut
          doloremque voluptas nihil ratione tenetur commodi nisi dolorum fugiat aspernatur ipsum
          labore quam. Error quasi, rerum quidem nisi neque ullam doloribus! Repellendus, fugit,
          quos omnis quasi maxime delectus vero perferendis fugiat blanditiis voluptas accusamus
          fuga ipsum alias iusto eveniet ipsam assumenda a et molestias deserunt iure doloribus
          veritatis magnam illo? Corporis recusandae nulla aliquid, quae, iste earum, fugiat quod
          quasi laboriosam dolorum ad consequuntur impedit ab reiciendis quaerat. Fugit dolores
          harum vel incidunt natus mollitia maxime quaerat aspernatur nisi! Accusantium a, vel
          impedit odio commodi soluta architecto odit incidunt. Ut repellendus ab deserunt
          dignissimos voluptas quia laborum, facilis iusto accusamus ratione voluptatibus, a
          aspernatur blanditiis, sapiente unde saepe? Dolores blanditiis corrupti iste non hic.
          Veritatis, nostrum? Accusamus aliquid voluptatibus enim sit aspernatur cupiditate, non
          iusto eligendi fugiat suscipit, ducimus asperiores sunt dolorum doloribus voluptas optio
          dolores quidem, tempore tenetur praesentium dolor. Accusamus dignissimos sit beatae
          perspiciatis iusto odio quia aperiam, debitis minima officia omnis sequi non repellendus
          officiis dolorem asperiores corrupti illo autem. Quia possimus nesciunt optio quisquam
          omnis vel, provident, corporis cupiditate dolorum debitis laborum inventore numquam
          deleniti, nostrum eaque voluptate! Enim fugit dicta, expedita voluptatum exercitationem
          dignissimos ipsum atque molestias hic, impedit assumenda amet vero maxime labore
          asperiores blanditiis accusantium magni reiciendis mollitia ut? Molestias minus quidem
          quae ratione laboriosam! Dignissimos ratione a illo, repellendus aut natus delectus vitae
          sed labore provident optio debitis tempore placeat, asperiores quod eligendi libero
          consequuntur eius qui nesciunt aperiam vel tenetur quis. Aperiam esse laboriosam excepturi
          dolorem perferendis? Ducimus vitae est nam possimus facere velit voluptate laborum, iste
          magnam recusandae pariatur. Facilis, placeat magnam suscipit temporibus, quod inventore
          tenetur eveniet iure ut itaque architecto exercitationem dolore quia illum magni cum optio
          debitis ullam officiis iusto accusamus! Ipsam maiores labore ut amet eligendi illum, quo
          tenetur facilis nam qui cum officiis quia, excepturi modi. Repellendus rem iusto
          aspernatur odio. Alias, debitis? Corporis enim exercitationem tempora, doloribus, in,
          iusto quos omnis repudiandae nam corrupti mollitia labore molestias! Voluptatibus
          repellendus atque odit. Magni eum ipsum laudantium non et eveniet, odio numquam
          perferendis! Vitae eveniet sed ipsum laudantium repellendus similique, iste incidunt
          dolores amet exercitationem voluptatum maiores suscipit distinctio nisi nihil doloremque
          ut eius accusantium eum dignissimos quos nemo saepe, rem voluptas? Repudiandae eum,
          laboriosam atque iure eveniet cumque unde id, non reprehenderit libero, nemo ab! Aperiam
          temporibus excepturi doloribus ipsa fugit error accusamus est id accusantium reiciendis,
          dolorem dolor adipisci tempore enim non vitae aliquid, delectus voluptatum iste cumque.
          Voluptas ipsam libero eum dolorem dolor fuga porro. Corporis veniam, illo, incidunt modi
          pariatur similique, quae aliquam cupiditate facilis aut dolorem quisquam! Voluptatibus rem
          minima quasi earum incidunt dignissimos iure reprehenderit molestias magni, possimus
          perspiciatis quos est pariatur amet omnis sunt facere. Quasi expedita quia in. Cupiditate
          asperiores pariatur ducimus amet deleniti quas, voluptatibus incidunt nam cumque id
          dignissimos nulla temporibus iusto at provident velit odio ex officiis cum facere tempore
          debitis. Quis ipsam animi nemo, iure voluptatum sint similique culpa ullam consequuntur ab
          quae molestiae magni aspernatur rem ducimus vitae ratione provident quia quisquam. Ad
          ducimus ipsa earum consectetur eligendi nesciunt non, autem corporis? Sapiente eaque
          reiciendis id! Iste culpa debitis quod esse adipisci. Cupiditate, laudantium eos nisi,
          recusandae quaerat odit sequi labore quam nulla at, libero non! Sequi cupiditate
          accusantium labore laboriosam modi suscipit ipsum debitis amet! Quos mollitia nihil illum
          at inventore, sed molestiae voluptatum eum officia quod sint nostrum reiciendis, amet
          debitis nesciunt? Totam ex non odit excepturi ut expedita aut, corrupti mollitia, officia
          fugit deleniti pariatur quas eligendi soluta quasi possimus facilis temporibus? Tenetur
          cum obcaecati, praesentium explicabo eos commodi deleniti ea necessitatibus, laborum
          doloribus dicta, omnis eum rerum aperiam? Suscipit dolor voluptates fugit quia asperiores
          ut natus corrupti tempore quo! Eveniet molestias alias at architecto saepe aliquid dolorum
          obcaecati aut, asperiores tempore accusantium quibusdam provident, similique, doloremque
          quidem? Est debitis corporis natus vero dolorem iste blanditiis nesciunt maiores ullam,
          doloremque incidunt! Aliquam accusantium atque fugiat porro dolor voluptas saepe expedita?
          Dignissimos quae, tempora hic provident temporibus ex fugit perferendis quis cumque,
          doloribus, ad nemo! Suscipit, odit. Tempore eaque vel deserunt quia ipsum qui,
          voluptatibus obcaecati quisquam aspernatur amet quasi, sapiente rerum minus voluptatem
          ratione architecto possimus velit magnam totam, atque quibusdam repellendus et laudantium.
          Officiis voluptates velit temporibus cumque ea? Cum, et qui libero fuga aut vel, obcaecati
          ea dolor temporibus repellendus sunt in nihil nesciunt, quia veritatis dolorem beatae at
          numquam assumenda aspernatur. Minus corporis et reprehenderit, atque ipsum dignissimos!
          Velit et enim soluta vero. Debitis quod voluptate quis cumque dolorum. Adipisci provident
          delectus est, aspernatur sunt laborum dolor libero dignissimos omnis, voluptates
          voluptatum alias culpa explicabo consequatur accusantium, dolore quam architecto. Autem
          enim voluptatum quidem tenetur quia, illo esse sed nihil totam dolor dolorem nisi possimus
          sit? Quia, culpa, facere voluptates aliquam commodi dolore dolorum accusantium voluptate
          odio iste ut incidunt. Rem fuga natus minima, debitis accusamus corrupti veniam.
          Asperiores, accusamus doloribus alias deleniti quibusdam placeat! Repellendus natus
          blanditiis doloremque cumque aliquid harum reiciendis nostrum expedita beatae, veritatis
          tenetur. Quis voluptatibus omnis exercitationem earum quod vitae doloremque vero, facere
          porro eaque eos nobis nemo voluptas accusantium illo distinctio impedit. Iure in ratione
          quisquam numquam tempora doloribus, nisi tenetur maxime velit possimus sunt ipsa atque
          ipsum facilis temporibus eum sit dolorum reprehenderit odio aspernatur quos veniam. Illo
          placeat perferendis facilis animi laborum non necessitatibus maiores quaerat blanditiis
          quas, totam laboriosam? Facere consequuntur, iusto nulla earum nostrum, perspiciatis minus
          repellat mollitia quibusdam tempora labore sapiente officia magnam recusandae accusantium
          non adipisci velit optio esse. Ipsam maiores omnis quasi atque ducimus illo molestias
          dignissimos eius iste est provident, id neque sint sapiente sed sit quos repellendus et
          quidem enim. Quam nisi eum quaerat quis temporibus dolores quidem accusamus officia
          debitis tempora provident officiis nulla ipsa placeat perferendis nam in ipsum sunt
          excepturi libero, ullam quas alias consectetur distinctio. Voluptatum autem libero enim
          possimus, beatae cupiditate optio ea ab quae facere, consequuntur nulla ullam incidunt eum
          perferendis. Ex, nihil iste cumque, velit impedit asperiores id minima eos saepe
          repudiandae excepturi doloremque assumenda similique sequi sit cupiditate vitae pariatur
          corporis esse harum atque accusamus nulla. Error fugiat assumenda at eius nemo qui fuga
          pariatur molestias id. Libero voluptatibus unde debitis velit corrupti nihil nesciunt
          omnis magni eum quasi nostrum, dolore id quos tempore ea ducimus adipisci quis incidunt ex
          placeat est accusantium suscipit sunt. Molestias eum non fugiat alias maxime, ipsam
          tempore, corporis eius quaerat pariatur recusandae unde quidem cum. Quidem quae corporis
          eum tenetur, iure sunt quod maxime nemo ipsa accusamus. Ducimus, delectus amet officiis
          esse vero labore, adipisci unde impedit molestiae nulla, temporibus rem sapiente cum
          quaerat quod alias incidunt veniam fugiat repudiandae illum voluptatum eligendi
          perferendis. Quaerat illo labore iusto libero, debitis doloribus ex! Quis architecto
          explicabo maiores porro deserunt. Facilis corrupti nemo accusantium explicabo cupiditate
          tempora temporibus beatae iure minus nisi illo consequuntur nesciunt, quas velit minima.
          Itaque dolore perferendis quibusdam in, repudiandae eum sunt qui delectus, modi debitis
          nesciunt ratione provident pariatur iure. Officiis nulla aliquid nostrum dolore error
          reiciendis neque quas ipsum qui vero. Pariatur, quam magni. Modi, sapiente illo
          dignissimos laudantium laboriosam cum ea explicabo animi, vel in natus totam ullam culpa
          ipsum eius deleniti accusamus quae officia tempore est ratione ex expedita exercitationem!
          Fugiat error rerum possimus adipisci, corporis explicabo quas vitae similique id dolor
          distinctio aliquam? Non sequi ullam impedit esse temporibus beatae, nihil dolor optio
          eaque omnis ut quos eum voluptate a pariatur aperiam cumque voluptas velit ipsum veritatis
          ipsam nulla? Dolore accusantium necessitatibus porro nesciunt natus neque minima
          laudantium ea, enim beatae! Optio reprehenderit voluptatem commodi iure voluptates
          molestias eum cumque aliquam? Id voluptates dolore, vel recusandae asperiores aut
          delectus? Mollitia quasi nemo, repellat doloremque deserunt facilis, laudantium, placeat
          dignissimos rerum pariatur ipsam odit accusamus eligendi saepe et! Totam facilis nihil
          earum sed autem quae voluptas natus nostrum, aliquam ex quidem dolore hic aperiam numquam
          ullam laudantium veniam esse delectus architecto enim! Laboriosam, beatae quia! Voluptas
          blanditiis tempore tenetur sit consequatur incidunt ducimus, error laboriosam est placeat
          aut hic soluta cumque dolor debitis eaque corporis, id eveniet nisi facilis, ratione
          fugiat alias maxime magnam? Maiores laboriosam porro suscipit id voluptate, quia
          dignissimos fugiat totam natus, ut impedit ea obcaecati nihil recusandae amet ducimus
          assumenda error vitae. Repudiandae accusantium atque fuga, omnis sint eius rerum
          repellendus sit itaque qui vero dolore minus incidunt veniam nemo? Sed vero error ab
          ipsum, a cumque officiis eaque laborum quam iste. Quos doloremque distinctio repellendus
          placeat possimus tempore ullam repudiandae, soluta eligendi, reiciendis et esse culpa
          laborum assumenda dolores est nisi quidem, voluptate facilis. Molestias praesentium sint
          velit voluptatem veniam dolore a.
        </p>
      </div>
    </div>
  </main>
</div>
